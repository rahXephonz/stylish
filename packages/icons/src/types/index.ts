import { SVGProps } from "react";

export type BaseIconProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

export const iconDefaultProps: Pick<BaseIconProps, "size" | "fill" | "stroke"> = {
  size: 22,
  fill: "none",
  stroke: "#1C1C1C",
};
