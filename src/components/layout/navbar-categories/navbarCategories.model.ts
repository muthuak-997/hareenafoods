import type { NavbarLink } from "../navbar/navbar.model";

export interface NavbarCategoriesProps {
  title: string;
  allLabel: string;
  allTo: string;
  links: NavbarLink[];
}
