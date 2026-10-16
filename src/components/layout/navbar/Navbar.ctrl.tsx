import { NavLink } from "react-router"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { CATEGORY_LINKS } from "@/constants/footer.const"
import {
    NAVBAR_CATEGORIES_ALL_FALLBACK_PATH,
    NAVBAR_CATEGORIES_ALL_LABEL,
    NAVBAR_CATEGORIES_LABEL,
    NAVBAR_LINKS,
    navbarLinkStyle,
} from "@/constants/navbar.const"

import { NavbarCategories } from "../navbar-categories/NavbarCategories.ctrl"

export function Navbar() {
    const [homeLink, ...remainingLinks] = NAVBAR_LINKS

    return (
        <NavigationMenu className="bg-primary text-white">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navbarLinkStyle()}
                        closeOnClick
                        render={<NavLink to={homeLink.to} end>{homeLink.label}</NavLink>}
                    />
                </NavigationMenuItem>

                <NavbarCategories
                    title={NAVBAR_CATEGORIES_LABEL}
                    allLabel={NAVBAR_CATEGORIES_ALL_LABEL}
                    allTo={CATEGORY_LINKS.seeAllTo ?? NAVBAR_CATEGORIES_ALL_FALLBACK_PATH}
                    links={CATEGORY_LINKS.links}
                />

                {remainingLinks.map((link) => (
                    <NavigationMenuItem key={link.to}>
                        <NavigationMenuLink
                            className={navbarLinkStyle()}
                            closeOnClick
                            render={<NavLink to={link.to} end>{link.label}</NavLink>}
                        />
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
