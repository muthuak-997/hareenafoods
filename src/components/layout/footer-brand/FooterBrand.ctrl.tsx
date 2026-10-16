import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import LogoImg from "@/assets/logo.png";

import type { FooterBrandProps } from "./footerBrand.model";

/** Logo, tagline, address and the phone/email contact rows. */
export function FooterBrand({ tagline, addressLines, phone, email }: FooterBrandProps) {
  return (
    <div>
      <Link to="/" className="inline-block">
        <img src={LogoImg} alt="Hareena Foods" className="w-44" />
      </Link>

      <p className="mt-5 max-w-64 text-sm leading-relaxed text-gray-300">{tagline}</p>

      <address className="mt-5 flex gap-3 not-italic">
        <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <span className="text-sm leading-relaxed">
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      </address>

      <hr className="my-6 w-40 border-primary/40" />

      <div className="space-y-4">
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="flex items-center gap-3 text-sm transition-colors hover:text-white"
        >
          <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
          {phone}
        </a>

        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 text-sm transition-colors hover:text-white"
        >
          <Mail className="size-5 shrink-0 text-primary" aria-hidden="true" />
          {email}
        </a>
      </div>
    </div>
  );
}
