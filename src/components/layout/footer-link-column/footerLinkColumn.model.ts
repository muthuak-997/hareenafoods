import type { FooterLinkGroup } from "../footer/footer.model";

export interface FooterLinkColumnProps {
  group: FooterLinkGroup;
  /** Links shown before the "Explore More" row kicks in. Defaults to 8. */
  visibleLimit?: number;
}
