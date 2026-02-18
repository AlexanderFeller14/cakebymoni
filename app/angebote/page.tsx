import type { Metadata } from 'next';
import { CtaBanner } from '@/components/cta-banner';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Angebote',
  description:
    'Individuelle Torten, Cupcakes, Sweet Tables und Party Catering in der Schweiz. Personalisiert für Geburtstage, Hochzeiten und Events.',
  alternates: {
    canonical: '/angebote'
  }
};

const services = [
  {
    title: 'Individuelle Torten',
    price: 'ab CHF 120',
    text: 'Massgeschneiderte Torten für Geburtstag, Hochzeit oder Jubiläum - mit Wunschgeschmack, Farbschema und Designthema.'
  },
  {
    title: 'Cupcakes',
    price: 'ab CHF 45 / 12er Box',
    text: 'Luftige Cupcakes mit harmonischen Toppings. Perfekt als Geschenk, für Candy Bars oder als Ergänzung zur Torte.'
  },
  {
    title: 'Dessert & Sweet Tables',
    price: 'ab CHF 290',
    text: 'Visuell abgestimmte Dessertlandschaften mit Cupcakes, Mini Desserts, Macarons und Signature Cake als Highlight.'
  },
  {
    title: 'Party Catering (klein bis mittel)',
    price: 'ab CHF 350',
    text: 'Komplette Dessertbegleitung für private und berufliche Events mit klarer Planung und zuverlässiger Umsetzung.'
  }
];

const process = [
  'Anfrage mit Datum, Anlass und Personenanzahl senden',
  'Designvorschlag und Geschmacksauswahl erhalten',
  'Feinschliff und verbindliche Bestätigung',
  'Abholung am Eventtag (Lieferung nach Vereinbarung möglich)'
];

export default function AngebotePage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-12 md:px-6 md:pt-16">
        <SectionHeading
          eyebrow="Leistungen"
          title="Massgeschneiderte Desserts für unvergessliche Feste"
          text="Jedes Angebot ist flexibel und wird exakt auf deinen Anlass abgestimmt. Du bekommst kein Standardprodukt, sondern ein individuelles Erlebnis."
        />

        <div className="stagger mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="card-hover rounded-[1.75rem] border border-rose/50 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-berry">{service.price}</p>
              <h2 className="mt-2 font-serif text-3xl text-cocoa">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cocoa/80">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-6">
        <div className="card-hover rounded-[2rem] border border-rose/50 bg-white p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">So läuft es ab</p>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {process.map((step, index) => (
              <li key={step} className="chip-hover rounded-2xl bg-rose/60 px-4 py-3 text-sm text-cocoa">
                <span className="mr-2 font-semibold text-berry">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
