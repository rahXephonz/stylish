import styled from "styled-components";
import {
  allSystemProps,
  AllSystemProps,
  pseudoSystemProps,
  PseudoSystemProps,
  shouldForwardProp,
  sxMixin,
  SxProps,
} from "system";

export interface BoxProps extends SxProps, AllSystemProps, PseudoSystemProps {
  className?: string;
  color?: string;
}

/**
 * Box is a base component with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */

const Box = styled("div").withConfig<BoxProps>({ shouldForwardProp })(sxMixin, allSystemProps, pseudoSystemProps);

Box.displayName = "Box";

export default Box;
