import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Jetzt bei Cake by Moni bestellen: Anfrage für Torten, Cupcakes, Sweet Tables und Party Catering in der Schweiz senden.',
  alternates: {
    canonical: '/kontakt'
  }
};

export default function KontaktPage() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-8 px-4 pb-16 pt-12 md:px-6 md:pt-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">Kontakt</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-cocoa md:text-5xl">Lass uns deinen süssen Moment planen</h1>
        <p className="mt-5 text-base leading-relaxed text-cocoa/80">
          Erzähl mir, was du feiern möchtest und welche Ideen du bereits hast. Das passende Angebot schauen wir meistens
          persönlich oder telefonisch zusammen an, damit Menge, Stil und Details genau zu deinem Anlass passen.
        </p>

        <div className="card-hover mt-8 rounded-[1.7rem] border border-rose/50 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">Kontakt auf einen Blick</p>
          <div className="mt-4 grid gap-3 text-sm text-cocoa/85 md:grid-cols-3">
            <div className="rounded-2xl border border-rose/50 bg-rose/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-berry">Telefon</p>
              <a href="tel:+41797725988" className="mt-1 block font-medium transition hover:text-berry">
                {siteConfig.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-rose/50 bg-rose/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-berry">Instagram</p>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="mt-1 block font-medium transition hover:text-berry">
                @cakebymoni
              </a>
            </div>
            <div className="rounded-2xl border border-rose/50 bg-rose/60 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-berry">Servicegebiet</p>
              <p className="mt-1 font-medium">{siteConfig.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
