import type { FooterSocialProps } from "./footerSocial.model";

/** "Get In Touch" heading plus the brand-coloured social circles. */
export function FooterSocial({ links }: FooterSocialProps) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white">Get In Touch</h3>
      <span className="mt-2.5 block h-0.5 w-8 bg-primary" aria-hidden="true" />

      <ul className="mt-6 flex flex-wrap items-center gap-3">
        {links.map((social) => {
          const Icon = social.icon;
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{ background: social.background }}
                className="flex size-8 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
              >
                <Icon className="size-4" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
