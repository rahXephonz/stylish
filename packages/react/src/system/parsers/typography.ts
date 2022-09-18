import CSS from "csstype";
import {
  Theme,
  RequiredTheme,
  system,
  ResponsiveValue,
  compose,
  Config,
  typography as _typography,
  TypographyProps as _TypographyProps,
} from "styled-system";

export interface TypographyProps<ThemeType extends Theme = RequiredTheme> extends _TypographyProps<ThemeType> {
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType>;
  textTransform?: ResponsiveValue<CSS.Property.TextTransform, ThemeType>;
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow, ThemeType>;
}

const config: Config = {
  textDecoration: true,
  textTransform: true,
  textOverflow: true,
};

export const typography = compose(_typography, system(config));

export const typographyProps = ["textDecoration", "textTransform", "textOverflow"];
