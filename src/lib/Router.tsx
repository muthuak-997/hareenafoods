
import { UserLayout } from "@/components/layout/user-layout/UserLayout.ctrl";
import { Home } from "@/pages/home/Home.ctrl";
import { BrowserRouter, Routes, Route } from "react-router";

export function Router() {
   return <BrowserRouter>
      <Routes>
         <Route path="/" element={<UserLayout/>} >
            <Route index element={<Home />} />
         </Route>
      </Routes>
   </BrowserRouter>
}
