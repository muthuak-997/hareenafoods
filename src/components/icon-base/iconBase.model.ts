import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export interface IconBaseProps extends IconProps {
  /** Accessible name. Also rendered as the SVG <title> for tooltip users. */
  label: string;
  /** Defaults to the Simple Icons 24x24 grid. Override for non-square marks. */
  viewBox?: string;
}
