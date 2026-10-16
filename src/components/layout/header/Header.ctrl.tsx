import LogoImg from "@/assets/logo.png";
import { Link } from "react-router";

import { GlobalSearch } from "../global-search/GlobalSearch.ctrl";
import { Separator } from "@/components/ui/separator";
import { HeaderNavItem } from "../header-nav-item/HeaderNavItem.ctrl";
import { Heart, ShoppingCartPlus } from "lucide-react";
import { AvatarDropdown } from "../avatar-dropdown/AvatarDropdown.ctrl";
import { Navbar } from "../navbar/Navbar.ctrl";


export function Header() {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between px-5 py-2 gap-4">
        <Link to={"/"}><img src={LogoImg} alt="Hareena" className="w-50" /></Link>
        <div className="flex lg:order-2 h-5 items-center gap-4 text-sm">
          <HeaderNavItem to="/" label="Wishlist" icon={Heart} badge={0} />
          <Separator orientation="vertical" />
          <HeaderNavItem to="/" label="My Cart" icon={ShoppingCartPlus} badge={0} />
          <Separator orientation="vertical" />
          <AvatarDropdown/>
        </div>
        <GlobalSearch />
      </div>
       <Navbar/>
    </header>
  )
}
