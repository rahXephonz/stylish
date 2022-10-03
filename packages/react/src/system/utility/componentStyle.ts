import css from "@styled-system/css";
import deepmerge from "deepmerge";
import runIfFn from "utils/runIfFn";
import { isEqual } from "lodash";
import { useMemo, useRef, ComponentProps } from "react";
import { get } from "styled-system";
import { useTheme } from "styled-components";
import type { ComponentThemeConfig } from "interface/Components";

const getStyles = (config?: ComponentThemeConfig, props: ComponentProps<any> = {}) => {
  if (config) {
    const propToScaleMap = config.propToScaleMap ?? [];

    const baseStyles = config.baseStyle ? runIfFn(config.baseStyle, props) : {};

    const scaleStyles = propToScaleMap
      .map(([prop, scale]) =>
        config.scales && props[prop] ? runIfFn(config.scales[scale]?.[props[prop]], props) : undefined
      )
      .filter(style => !!style) as Record<string, unknown>[];

    return deepmerge.all([baseStyles, ...scaleStyles, props.sx ?? {}]);
  }

  return {};
};

/**
 * Hook for resolving a component's styles.
 * The result of which can then be passed to the `sx` prop.
 */

export const useComponentStyles = (componentKey: string, props: ComponentProps<any> = {}) => {
  const theme = useTheme();
  const stylesRef = useRef({});

  // get theme components from component styles
  const config = get(theme, `componentStyles.${componentKey}`);

  const allProps = useMemo(() => {
    const { children, ...rest } = props;
    return deepmerge.all([{ theme }, rest]);
  }, [props, theme]);

  return useMemo(() => {
    const styles = getStyles(config, allProps);
    const isEquals = isEqual(stylesRef.current, styles);

    if (!isEquals) stylesRef.current = styles;

    return stylesRef.current;
  }, [allProps, config]);
};

/**
 * Parser for resolving a component's styles.
 */

export const componentStylesMixin = (componentKey: string) => {
  return (props: ComponentProps<any>) => {
    const { children, theme, ...rest } = props;

    const config = get(theme, `componentStyles.${componentKey}`);
    const allProps = deepmerge.all([{ theme }, rest]);

    const styles: any = getStyles(config, allProps);

    return css(styles)(props);
  };
};

/**
 * Parser for resolving a component's base styles.
 */

export const getBaseStyles = (componentKey: string) => {
  return (props: ComponentProps<any>) => {
    const { theme } = props;

    const config = get(theme, `componentStyles.${componentKey}`);

    if (config) {
      const baseStyles = config.baseStyle ? runIfFn(config.baseStyle, props) : {};

      return css(baseStyles);
    }

    return {};
  };
};
