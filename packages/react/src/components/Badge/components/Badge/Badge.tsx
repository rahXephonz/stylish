import React from "react";

import { Box, BoxProps } from "layout/Box";
import { useComponentStyles } from "system";
import { Text } from "typography";

export interface BadgeProps extends Omit<BoxProps, "size"> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** The variant options available for a badge. Defaults to 'default' */
  variant?: "default" | "info" | "warning" | "critical" | "success" | "active";
  /** Size of the badge. Defaults to 'md' */
  size?: "sm" | "md";
  /** The icon that renders with the badge */
  icon?: React.ComponentType<any>;
  /** JSX Elements or any constructor */
  children?: React.ReactNode;
}

/** Badge text for entity, status, etc. */
const Badge = React.forwardRef<HTMLSpanElement, React.PropsWithChildren<BadgeProps>>(
  ({ className, variant = "default", size = "md", icon, children, sx, ...rest }, ref) => {
    const styles = useComponentStyles("badge", { variant, size });

    const renderInner = () => {
      if (icon) {
        return (
          <>
            {React.createElement(icon, { fill: "currentColor", size: 14, "aria-hidden": true })}
            <Text scale={300}>{children}</Text>
          </>
        );
      }

      return children;
    };

    return (
      <Box as={icon ? "div" : "span"} ref={ref} className={className} sx={{ ...styles, ...sx }} {...rest}>
        {renderInner()}
      </Box>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
