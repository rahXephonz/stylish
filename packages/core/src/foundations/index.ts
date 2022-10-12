import colors, { Colors } from "./colors";
import radius, { Radius } from "./radius";
import space, { Space } from "./space";
import typography, { Fonts, FontSizes, LineHeights } from "./typography";

export type Foundations = {
  colors: Colors;
  space: Space;
  sizes: Space;
  fonts: Fonts;
  fontSizes: FontSizes;
  radius: Radius;
  lineHeights: LineHeights;
};

export type { Colors, Space, Fonts, FontSizes, LineHeights, Radius };

const foundations: Foundations = {
  colors,
  space,
  sizes: space,
  radius,
  ...typography,
};

export default foundations;
