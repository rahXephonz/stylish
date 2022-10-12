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

export type HeadingScale = "2xl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";

export interface HeadingProps<ThemeType extends Theme = RequiredTheme>
  extends SxProps,
    AllSystemProps,
    PseudoSystemProps {
  /** Color of the text. */
  color?: string;
  /** React JSX or any constructor. */
  children?: React.ReactNode;
  /** Size value of the heading. */
  scale?: ResponsiveValue<HeadingScale, ThemeType>;
}

const textProps = ["scale"];

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled("h2").withConfig<HeadingProps>({
  shouldForwardProp: sfp(textProps),
})(componentStylesMixin("heading"), sxMixin, allSystemProps, pseudoSystemProps);

Heading.defaultProps = {
  scale: "2xl",
};

Heading.displayName = "Heading";

export default Heading;
