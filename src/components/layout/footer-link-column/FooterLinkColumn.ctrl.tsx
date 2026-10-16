import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

import type { FooterLinkColumnProps } from "./footerLinkColumn.model";

const DEFAULT_VISIBLE_LIMIT = 8;

/** A titled vertical link list with the green accent bar and chevron prefixes. */
export function FooterLinkColumn({
  group,
  visibleLimit = DEFAULT_VISIBLE_LIMIT,
}: FooterLinkColumnProps) {
  const visibleLinks = group.links.slice(0, visibleLimit);
  const hasMore = group.links.length > visibleLimit;
  const showMore = hasMore && Boolean(group.seeAllTo);

  return (
    <div>
      <h3 className="text-base font-semibold text-white">{group.title}</h3>
      <span className="mt-2.5 block h-0.5 w-8 bg-primary" aria-hidden="true" />

      <ul className="mt-6 space-y-3.5">
        {visibleLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="group flex items-center gap-2 text-sm transition-colors hover:text-white"
            >
              <ChevronRight
                className="size-3.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              {link.label}
            </Link>
          </li>
        ))}

        {showMore && group.seeAllTo ? (
          <li>
            <Link
              to={group.seeAllTo}
              className="flex items-center gap-2 text-sm text-primary transition-colors hover:text-white"
            >
              <ChevronRight
                className="size-3.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              Explore More
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
