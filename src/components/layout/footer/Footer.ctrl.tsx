import { ShieldCheck } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  BRAND_TAGLINE,
  CATEGORY_LINKS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  COPYRIGHT_YEAR,
  FOOTER_ADDRESS_LINES,
  FOOTER_LEAF_SRC,
  GOOGLE_PLAY_BADGE_SRC,
  HELP_LINKS,
  PAYMENT_METHODS,
  PLAY_STORE_URL,
  SOCIAL_LINKS,
  USEFUL_LINKS,
} from "@/constants/footer.const";

import { FooterBrand } from "../footer-brand/FooterBrand.ctrl";
import { FooterLinkColumn } from "../footer-link-column/FooterLinkColumn.ctrl";
import { FooterSocial } from "../footer-social/FooterSocial.ctrl";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-black text-sm text-gray-400">
      {/* Decorative corner artwork */}
      <img
        src={FOOTER_LEAF_SRC}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 hidden w-80 opacity-40 lg:block"
      />

      <div className="relative grid grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))_1.5fr]">
        <FooterBrand
          tagline={BRAND_TAGLINE}
          addressLines={FOOTER_ADDRESS_LINES}
          phone={CONTACT_PHONE}
          email={CONTACT_EMAIL}
        />

        <FooterLinkColumn group={CATEGORY_LINKS} />
        <FooterLinkColumn group={USEFUL_LINKS} />
        <FooterLinkColumn group={HELP_LINKS} />

        {/* Right rail */}
        <div className="lg:border-l lg:border-white/15 lg:pl-8">
          <h3 className="text-base font-semibold text-white">Download App</h3>
          <span className="mt-2.5 block h-0.5 w-8 bg-primary" aria-hidden="true" />

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block"
          >
            <img
              src={GOOGLE_PLAY_BADGE_SRC}
              alt="Get it on Google Play"
              className="w-31.25"
            />
          </a>

          <div className="mt-10">
            <FooterSocial links={SOCIAL_LINKS} />
          </div>
        </div>
      </div>

      <Separator className="relative bg-white/15" />

      {/* Copyright and payment methods */}
      <div className="relative flex flex-col items-center justify-between gap-4 px-5 py-7 sm:flex-row">
        <div className="flex items-center gap-3">
          <ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />
          <p>&copy; {COPYRIGHT_YEAR} Hareena Foods. All rights reserved.</p>
        </div>

        <ul className="flex items-center gap-3">
          {PAYMENT_METHODS.map((method) => (
            <li key={method.label}>
              <img
                src={method.src}
                alt={method.label}
                title={method.label}
                className="w-11.5"
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
