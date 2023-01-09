import { SVGProps } from "react";

export type BaseIconProps = {
  size?: number;
} & SVGProps<SVGSVGElement>;

export const iconDefaultProps: BaseIconProps = {
  size: 24,
};
