import styled from "styled-components";
import { ResponsiveValue, Theme, RequiredTheme } from "styled-system";

import {
  sfp,
  pseudoSystemProps,
  allSystemProps,
  AllSystemProps,
  sxMixin,
  SxProps,
  componentStylesMixin,
  PseudoSystemProps,
} from "system";

export type TextScale = "lg" | "md" | "sm" | "xs";

export interface TextProps<ThemeType extends Theme = RequiredTheme> extends SxProps, AllSystemProps, PseudoSystemProps {
  /** Color of the text. */
  color?: string;
  /** React JSX or any constructor. */
  children?: React.ReactNode;
  /** Size value of the text. */
  scale?: ResponsiveValue<TextScale, ThemeType>;
}

const textProps = ["scale"];

/**
 * This is a base `Text` element to handle typography elements.
 */
const Text = styled("span").withConfig<TextProps>({
  shouldForwardProp: sfp(textProps),
})(componentStylesMixin("text"), sxMixin, allSystemProps, pseudoSystemProps);

Text.displayName = "Text";

export default Text;
