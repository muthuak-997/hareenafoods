import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/constants/navigationMenu.const"
import { Link, NavLink } from "react-router"

export function Navbar() {
    return (
        <NavigationMenu className="bg-primary text-white">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<NavLink to="/">Home</NavLink>} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-50">
                            <li>
                                <NavigationMenuLink render={<Link to="#" className="flex-row items-center gap-2">All</Link>} />
                                <NavigationMenuLink render={<Link to="#" className="flex-row items-center gap-2">Flour</Link>} />
                                <NavigationMenuLink render={<Link to="#" className="flex-row items-center gap-2">Dal</Link>} />
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<NavLink to="/">Features Products</NavLink>} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<NavLink to="/">BlockOffers</NavLink>} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<NavLink to="/">Top Seller</NavLink>} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<NavLink to="/">Contact us</NavLink>} />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

