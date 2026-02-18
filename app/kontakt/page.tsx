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
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-16 pt-12 md:grid-cols-[1fr_1.1fr] md:px-6 md:pt-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">Kontakt</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-cocoa md:text-5xl">Lass uns deinen Sweet Moment planen</h1>
        <p className="mt-5 text-base leading-relaxed text-cocoa/80">
          Erzähl mir, was du feiern möchtest. Je genauer Anlass, Datum, Stil und Personenzahl beschrieben sind,
          desto schneller kann ich dir ein passendes Angebot senden.
        </p>

        <div className="card-hover mt-8 space-y-3 rounded-[1.5rem] border border-rose/50 bg-white p-5 text-sm text-cocoa/85">
          <p>
            <strong>Servicegebiet:</strong> {siteConfig.serviceArea}
          </p>
          <p>
            <strong>Telefon:</strong> {siteConfig.phone}
          </p>
          <p>
            <strong>Instagram:</strong> @cakebymoni
          </p>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
