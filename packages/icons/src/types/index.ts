import { SVGProps } from "react";

export type BaseIconProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

export const iconDefaultProps: BaseIconProps = {
  size: 22,
  fill: "none",
  stroke: "#1C1C1C",
};
