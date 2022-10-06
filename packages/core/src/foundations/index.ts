import colors, { Colors } from "./colors";
import space, { Space } from "./space";
import typography, { Fonts, FontSizes, LineHeights } from "./typography";

export type Foundations = {
  colors: Colors;
  space: Space;
  sizes: Space;
  fonts: Fonts;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
};

export type { Colors, Space, Fonts, FontSizes, LineHeights };

const foundations: Foundations = {
  colors,
  space,
  sizes: space,
  ...typography,
};

export default foundations;
