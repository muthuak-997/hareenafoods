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
      <div className="flex items-center justify-between px-5 py-2">
        <Link to={"/"}><img src={LogoImg} alt="Hareena" className="w-50" /></Link>
        <GlobalSearch />
        <div className="flex h-5 items-center gap-4 text-sm">
          <HeaderNavItem to="/" label="Wishlist" icon={Heart} badge={0} />
          <Separator orientation="vertical" />
          <HeaderNavItem to="/" label="My Cart" icon={ShoppingCartPlus} badge={0} />
          <Separator orientation="vertical" />
          <AvatarDropdown/>
        </div>
      </div>
       <Navbar/>
    </header>
  )
}
