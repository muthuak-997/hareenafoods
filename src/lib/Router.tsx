
import { UserLayout } from "@/components/layout/user-layout/UserLayout.ctrl";
import { Home } from "@/pages/home/Home.ctrl";
import { Placeholder } from "@/pages/placeholder/Placeholder.ctrl";
import { BrowserRouter, Routes, Route } from "react-router";

export function Router() {
   return <BrowserRouter>
      <Routes>
         <Route path="/" element={<UserLayout/>} >
            <Route index element={<Home />} />
            <Route path="about-us" element={<Placeholder />} />
            <Route path="featured-products" element={<Placeholder />} />
            <Route path="blockbuster-offers" element={<Placeholder />} />
            <Route path="top-sellers" element={<Placeholder />} />
            <Route path="contacts" element={<Placeholder />} />
            <Route path="blogs" element={<Placeholder />} />
            <Route path="faq" element={<Placeholder />} />
            <Route path="privacy-policy" element={<Placeholder />} />
            <Route path="return-policy" element={<Placeholder />} />
            <Route path="shipping-policy" element={<Placeholder />} />
            <Route path="terms-conditions" element={<Placeholder />} />
            <Route path="category/:slug" element={<Placeholder />} />
         </Route>
      </Routes>
   </BrowserRouter>
}
