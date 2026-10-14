import type { LucideIcon } from "lucide-react";

export interface HeaderNavItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
  badge?: number | string;
  className?: string;
}