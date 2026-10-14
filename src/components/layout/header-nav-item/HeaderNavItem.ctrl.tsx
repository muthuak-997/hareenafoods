import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { HeaderNavItemProps } from "./headerNavItem.model";

export function HeaderNavItem({
  to,
  icon: Icon,
  label,
  badge,
  className,
}: HeaderNavItemProps) {
  return (
    <Link to={to} className={cn("inline-flex items-center gap-1", className)}>
      <span className="relative inline-flex">
        <Icon className="size-5" />
        {badge ? (
          <Badge className="absolute -top-1.5 -right-2 h-4 min-w-4 px-1 text-[10px]">
            {badge}
          </Badge>
        ) : null}
      </span>
      <span>{label}</span>
    </Link>
  );
}
