import type { SystemStyleObject } from "@styled-system/css";
import type { DefaultTheme } from "styled-components";

// fallback handler, type variable css
export type CSSObject = SystemStyleObject | Record<string, any>;

export type ComponentThemeScaleFn<P = Record<string, any>> = (props: P & { theme: DefaultTheme }) => CSSObject;

// FIXME was SystemStyleObject
export type ComponentThemeScale<P> = CSSObject | ComponentThemeScaleFn<P>;

export type ComponentThemeConfig<Props = Record<string, any>> = {
  propToScaleMap?: Array<[string, string]>;
  baseStyle?: ComponentThemeScale<Props>;
  scales?: {
    [scale: string]: {
      [key: string]: ComponentThemeScale<Props> | undefined;
    };
  };
};
