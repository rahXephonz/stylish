import CSS from "csstype";
import { Config, RequiredTheme, ResponsiveValue, system, Theme } from "styled-system";

export interface OtherProps<ThemeType extends Theme = RequiredTheme> {
  appearance?: ResponsiveValue<CSS.Property.Appearance, ThemeType>;
  visibility?: ResponsiveValue<CSS.Property.Visibility, ThemeType>;
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect, ThemeType>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents, ThemeType>;
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak, ThemeType>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap, ThemeType>;
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing, ThemeType>;
  cursor?: ResponsiveValue<CSS.Property.Cursor, ThemeType>;
  resize?: ResponsiveValue<CSS.Property.Resize, ThemeType>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit, ThemeType>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition, ThemeType>;
  float?: ResponsiveValue<CSS.Property.Float, ThemeType>;
  fill?: ResponsiveValue<CSS.Property.Fill, ThemeType>;
  stroke?: ResponsiveValue<CSS.Property.Stroke, ThemeType>;
  outline?: ResponsiveValue<CSS.Property.Outline, ThemeType>;
}

const config: Config = {
  appearance: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: true,
  fill: true,
  stroke: true,
  outline: true,
};

export const other = system(config);

export const otherProps = [
  "appearance",
  "visibility",
  "whiteSpace",
  "userSelect",
  "pointerEvents",
  "wordBreak",
  "overflowWrap",
  "boxSizing",
  "cursor",
  "resize",
  "objectFit",
  "objectPosition",
  "float",
  "fill",
  "stroke",
  "outline",
];
