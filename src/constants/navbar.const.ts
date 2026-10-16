import { cn } from "@/lib/utils";
import type { NavbarLink } from "@/components/layout/navbar/navbar.model";
import { navigationMenuTriggerStyle } from "@/constants/navigationMenu.const";

/**
 * Plain nav links. The Categories dropdown is not in this list because it is a
 * menu rather than a link - see NavbarCategories.
 */
export const NAVBAR_LINKS: NavbarLink[] = [
  { label: "Home", to: "/" },
  { label: "Featured Products", to: "/featured-products" },
  { label: "Blockbuster Offers", to: "/blockbuster-offers" },
  { label: "Top Sellers", to: "/top-sellers" },
  { label: "Contacts", to: "/contacts" },
];

export const NAVBAR_CATEGORIES_LABEL = "Categories";
export const NAVBAR_CATEGORIES_ALL_LABEL = "All Categories";

/** Fallback when CATEGORY_LINKS has no seeAllTo configured. */
export const NAVBAR_CATEGORIES_ALL_FALLBACK_PATH = "/category/all";

/** Green text for the dropdown link the user is currently on. */
export const NAVBAR_CATEGORIES_ACTIVE_LINK_STYLE = "data-active:text-primary";

/** Black trigger while the current route is one of the dropdown's links. */
export const NAVBAR_CATEGORIES_ACTIVE_TRIGGER_STYLE = "bg-black";

/**
 * Black highlight for the nav link React Router marks active. React Router adds
 * the `active` class itself, so this is keyed off that rather than a prop we
 * would have to thread through.
 */
export const NAVBAR_ACTIVE_HIGHLIGHT = "[&.active]:bg-black";

export const navbarLinkStyle = () =>
  cn(navigationMenuTriggerStyle(), NAVBAR_ACTIVE_HIGHLIGHT);
