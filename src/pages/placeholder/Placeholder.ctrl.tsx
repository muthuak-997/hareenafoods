import { Link, useLocation } from "react-router";

const TITLES: Record<string, string> = {
  "all": "All Categories",
  "about-us": "About Us",
  "featured-products": "Featured Products",
  "blockbuster-offers": "Blockbuster Offers",
  "top-sellers": "Top Sellers",
  contacts: "Contacts",
  blogs: "Blogs",
  faq: "Faq",
  "privacy-policy": "Privacy Policy",
  "return-policy": "Return Policy",
  "shipping-policy": "Shipping Policy",
  "terms-conditions": "Terms & Conditions",
};

export function Placeholder() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/(category\/)?/, "");
  const title =
    TITLES[slug] ??
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-muted-foreground">This page has not been built yet.</p>
      <Link to="/" className="text-sm underline underline-offset-4">
        Back to home
      </Link>
    </div>
  );
}
