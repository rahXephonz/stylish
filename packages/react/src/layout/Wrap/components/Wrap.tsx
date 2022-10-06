import CSS from "csstype";
import React from "react";
import { Box, BoxProps } from "layout/Box";
import type { DefaultTheme } from "styled-components";
import { theme } from "theme";
import WrapItem from "./WrapItem";

type Space = keyof typeof theme["space"];

export interface WrapProps extends BoxProps, React.ComponentPropsWithoutRef<"div"> {
  /** Alignment for items */
  alignItems?: CSS.Property.AlignItems;
  /** Content Justify for items */
  justifyContent?: CSS.Property.JustifyContent;
  /** Spacing for element usually using number or string */
  spacing?: Space | CSS.Property.Margin;
  /** JSX Elements or any constructor */
  shouldWrapChildren?: boolean;
}

const Wrap = React.forwardRef<HTMLDivElement, WrapProps>(
  ({ children, spacing = "xs", alignItems, justifyContent, shouldWrapChildren, ...rest }, ref) => {
    const childrenToRender = shouldWrapChildren
      ? // eslint-disable-next-line react/no-array-index-key
        React.Children.map(children, (child, index) => <WrapItem key={`wrap-child-${index}`}>{child}</WrapItem>)
      : children;

    return (
      <Box ref={ref} {...rest}>
        <Box
          as="ul"
          sx={{
            "--stylish-wrap-spacing": (t: DefaultTheme) => t.space[spacing as Space] || spacing,
            "--wrap-spacing": "calc(var(--stylish-wrap-spacing) / 2)",
            display: "flex",
            flexWrap: "wrap",
            alignItems,
            justifyContent,
            listStyleType: "none",
            padding: 0,
            margin: "calc(var(--wrap-spacing) * -1)",
            "& > :not([hidden])": {
              margin: "var(--wrap-spacing)",
            },
          }}
        >
          {childrenToRender}
        </Box>
      </Box>
    );
  }
);

Wrap.displayName = "Wrap";

export default Wrap;
