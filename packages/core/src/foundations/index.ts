import space, { type Space } from "./space";
import typography, { type FontSizes, type Fonts, type LineHeights } from "./typography";

export type Foundations = {
  space: Space;
  sizes: Space;
  fonts: Fonts;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
};

export type { Space };

const foundations: Foundations = {
  space,
  sizes: space,
  ...typography,
};

export default foundations;
