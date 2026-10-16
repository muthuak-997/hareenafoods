import americanExpressImg from "@/assets/footer/american.png";
import discoverImg from "@/assets/footer/discover.png";
import googlePlayImg from "@/assets/footer/google.png";
import leafImg from "@/assets/footer/leaf.png";
import mastercardImg from "@/assets/footer/master.png";
import visaImg from "@/assets/footer/visa.png";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/social-icons/SocialIcons.ctrl";
import type {
  FooterLinkGroup,
  PaymentMethod,
  SocialLink,
} from "@/components/layout/footer/footer.model";

export const BRAND_TAGLINE = "Pure Spices. Rich Flavours. Since 1975.";

export const FOOTER_ADDRESS_LINES = [
  "4/581 Velachery Main Road,",
  "Senthamizh Nagar, Medavakkam,",
  "Chennai - 600 100",
];

export const CONTACT_PHONE = "+91 44 6677 6677";
export const CONTACT_EMAIL = "care@hareenafoods.com";

export const COPYRIGHT_YEAR = new Date().getFullYear();

/** TODO: replace with the live Google Play listing once the package is published. */
export const PLAY_STORE_URL = "https://play.google.com/store";

export const USEFUL_LINKS: FooterLinkGroup = {
  title: "Useful Links",
  links: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Featured Products", to: "/featured-products" },
    { label: "Blockbuster Offers", to: "/blockbuster-offers" },
    { label: "Top Sellers", to: "/top-sellers" },
    { label: "Contacts", to: "/contacts" },
    { label: "Blogs", to: "/blogs" },
  ],
};

export const CATEGORY_LINKS: FooterLinkGroup = {
  title: "Categories",
  seeAllTo: "/category/all",
  links: [
    { label: "Flour", to: "/category/flour" },
    { label: "Dal", to: "/category/dal" },
    { label: "Whole Spices", to: "/category/whole-spices" },
    { label: "Sugar", to: "/category/sugar" },
    { label: "Roasted Vermicelli", to: "/category/roasted-vermicelli" },
    { label: "Rice", to: "/category/rice" },
    { label: "Biscuits", to: "/category/biscuits" },
    { label: "Cold Pressed Oils", to: "/category/cold-pressed-oils" },
    { label: "Others", to: "/category/others" },
    { label: "Jaggery Powder", to: "/category/jaggery-powder" },
    { label: "Millets", to: "/category/millets" },
    { label: "Health Mix 1 + 1 FREE OFFER", to: "/category/health-mix-1-1-free-offer" },
    { label: "Deepam Oil", to: "/category/deepam-oil" },
    { label: "Salt", to: "/category/salt" },
  ],
};

export const HELP_LINKS: FooterLinkGroup = {
  title: "Help Us",
  links: [
    { label: "Faq", to: "/faq" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Return Policy", to: "/return-policy" },
    { label: "Shipping Policy", to: "/shipping-policy" },
    { label: "Terms & Conditions", to: "/terms-conditions" },
  ],
};

/**
 * TODO: swap these homepages for the real Hareena Foods profile URLs.
 * `background` fills the circle and can be a hex or any CSS background value;
 * the glyph itself is drawn in currentColor (white), so the two must contrast.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com", background: "#1877F2", icon: FacebookIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)",
    icon: InstagramIcon,
  },
  { label: "Twitter", href: "https://twitter.com", background: "#1DA1F2", icon: TwitterIcon },
  { label: "YouTube", href: "https://www.youtube.com", background: "#FF0000", icon: YoutubeIcon },
  { label: "WhatsApp", href: "https://wa.me", background: "#25D366", icon: WhatsappIcon },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { label: "Visa", src: visaImg },
  { label: "Mastercard", src: mastercardImg },
  { label: "Discover", src: discoverImg },
  { label: "American Express", src: americanExpressImg },
];

export const GOOGLE_PLAY_BADGE_SRC = googlePlayImg;
export const FOOTER_LEAF_SRC = leafImg;
