import React from "react";

import { theme } from "theme";
import { Box, BoxProps } from "layout/Box";

type Space = keyof typeof theme["space"];

export interface StackProps extends Omit<BoxProps, "color"> {
  id: string;
  className: string;
  color: string;
  direction: "horizontal" | "vertical";
  spacing: Space;
  children: React.ReactNode;
}

const Stack = React.forwardRef<HTMLDivElement, Partial<StackProps>>(
  ({ children, spacing, direction = "vertical", ...rest }, ref) => {
    const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);
    const isSpaceExist = spacing && theme.space[spacing];

    return (
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flexDirection: direction === "horizontal" ? "row" : "column",
          "> :not([hidden]) ~ :not([hidden])": {
            ...(direction === "horizontal" ? { ml: isSpaceExist } : { mt: isSpaceExist }),
          },
        }}
        {...rest}
      >
        {validChildrenArray.map((child, i) => {
          if (typeof child === "string" || child.type === React.Fragment)
            // eslint-disable-next-line react/no-array-index-key
            return <Box key={`stack-child-${i}`}>{child}</Box>;

          return React.cloneElement(child);
        })}
      </Box>
    );
  }
);

Stack.displayName = "Stack";

export default Stack;
