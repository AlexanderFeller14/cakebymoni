import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-rose/40 bg-[#fff4eb]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-serif text-2xl text-cocoa">Cake by Moni</p>
          <p className="mt-3 text-sm leading-relaxed text-cocoa/80">
            Handgemachte Kuchen, Cupcakes und Party-Highlights für deine besonderen Momente.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-berry">Kontakt</p>
          <p className="mt-3 text-sm text-cocoa/80">{siteConfig.address}</p>
          <p className="mt-2 text-sm text-cocoa/80">{siteConfig.phone}</p>
          <p className="mt-2 text-sm text-cocoa/80">{siteConfig.email}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-berry">Rechtliches</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-cocoa/80">
            <Link className="transition hover:-translate-y-0.5 hover:text-berry" href="/impressum">
              Impressum
            </Link>
            <Link className="transition hover:-translate-y-0.5 hover:text-berry" href="/datenschutz">
              Datenschutz
            </Link>
            <Link
              className="transition hover:-translate-y-0.5 hover:text-berry"
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-rose/40 px-4 py-4 text-center text-xs text-cocoa/70">
        {new Date().getFullYear()} Cake by Moni. Mit Liebe in der Schweiz gebacken.
      </div>
    </footer>
  );
}
