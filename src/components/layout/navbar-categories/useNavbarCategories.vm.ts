import { useLocation } from "react-router";

import type { NavbarLink } from "../navbar/navbar.model";

/**
 * Route-aware active state for the Categories dropdown and its trigger.
 *
 * Matching is an exact pathname compare. The dropdown links are all top-level
 * category routes, so there is no partial-match case to handle today.
 */
export function useNavbarCategories(links: NavbarLink[], allTo: string) {
  const { pathname } = useLocation();

  const isLinkActive = (to: string) => pathname === to;

  const hasActiveChild =
    links.some((link) => isLinkActive(link.to)) || isLinkActive(allTo);

  return { isLinkActive, hasActiveChild };
}
