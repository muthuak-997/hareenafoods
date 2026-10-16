import { Outlet } from "react-router";
import { Footer } from "../footer/Footer.ctrl";
import { Header } from "../header/Header.ctrl";

export function UserLayout() {
  return (
    <div className="flex min-h-screen flex-col">
        <Header/>
        <main className="flex-1"><Outlet/></main>
        <Footer/>
    </div>
  )
}
