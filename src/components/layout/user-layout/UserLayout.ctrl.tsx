import { Outlet } from "react-router";
import { Footer } from "../footer/Footer.ctrl";
import { Header } from "../header/Header.ctrl";

export function UserLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
