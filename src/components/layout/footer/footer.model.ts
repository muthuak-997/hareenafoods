import type { SocialIconComponent } from "@/components/social-icons/socialIcons.model";

export interface FooterLink {
  label: string;
  to: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
  /**
   * Destination for the "Explore More" row. Only rendered when the group has
   * more links than the column's visible limit.
   */
  seeAllTo?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Circle fill - a hex or any CSS background value. Glyph is drawn white. */
  background: string;
  icon: SocialIconComponent;
}

export interface PaymentMethod {
  label: string;
  src: string;
}
