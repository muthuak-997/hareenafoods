import type { IconBaseProps } from "./iconBase.model";

/**
 * Shared <svg> shell for every icon in the project.
 *
 * Keeps the accessibility plumbing (role, aria-label, <title>) in one place so
 * individual icons only have to describe their own shape.
 */
export function IconBase({
  label,
  viewBox = "0 0 24 24",
  className,
  children,
  ...props
}: IconBaseProps) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label}
      className={className}
      {...props}
    >
      <title>{label}</title>
      {children}
    </svg>
  );
}
