import { NavLink } from "react-router";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  NAVBAR_CATEGORIES_ACTIVE_LINK_STYLE,
  NAVBAR_CATEGORIES_ACTIVE_TRIGGER_STYLE,
} from "@/constants/navbar.const";

import type { NavbarCategoriesProps } from "./navbarCategories.model";
import { useNavbarCategories } from "./useNavbarCategories.vm";

/** The Categories trigger plus its dropdown of every category link. */
export function NavbarCategories({
  title,
  allLabel,
  allTo,
  links,
}: NavbarCategoriesProps) {
  const { isLinkActive, hasActiveChild } = useNavbarCategories(links, allTo);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(hasActiveChild && NAVBAR_CATEGORIES_ACTIVE_TRIGGER_STYLE, "p-3")}
      >
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-96 grid-cols-2 gap-1 p-2">
          <li>
            <NavigationMenuLink
              closeOnClick
              active={isLinkActive(allTo)}
              className={NAVBAR_CATEGORIES_ACTIVE_LINK_STYLE}
              render={
                <NavLink to={allTo} className="font-medium">
                  {allLabel}
                </NavLink>
              }
            />
          </li>
          {links.map((link) => (
            <li key={link.to}>
              <NavigationMenuLink
                closeOnClick
                active={isLinkActive(link.to)}
                className={NAVBAR_CATEGORIES_ACTIVE_LINK_STYLE}
                render={<NavLink to={link.to}>{link.label}</NavLink>}
              />
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
