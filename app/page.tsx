import type { Metadata } from 'next';
import Link from 'next/link';
import { CtaBanner } from '@/components/cta-banner';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Startseite',
  description:
    'Custom Cakes & Cupcakes für besondere Momente. Lokale Bestellung in der Schweiz für Geburtstage, Hochzeiten und Events.',
  alternates: {
    canonical: '/'
  }
};

const trustBadges = ['Handgemacht', 'Individuell', 'Lokal in der Schweiz'];
const process = ['Anfrage senden', 'Termin vereinbaren', 'Design abstimmen', 'Abholung (Lieferung nach Vereinbarung)'];
const offers = [
  {
    title: 'Individuelle Torten',
    text: 'Geburtstag, Hochzeit oder Jubiläum: jede Torte wird auf dein Event abgestimmt.'
  },
  {
    title: 'Cupcakes & Dessert Boxes',
    text: 'Perfekt für Taufen, Firmenanlässe oder als stilvolles Geschenk.'
  },
  {
    title: 'Sweet Tables',
    text: 'Ein harmonisches Dessertkonzept mit Wow-Effekt für kleine bis mittlere Events.'
  }
];
const occasions = ['Geburtstag', 'Hochzeit', 'Taufe', 'Jubiläum', 'Business Event', 'Familienfest'];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 pb-20 pt-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6 md:pt-24">
        <div className="animate-fadeUp">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">Premium Homemade Bakery</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cocoa md:text-6xl">
            Custom Cakes & Cupcakes für besondere Momente.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cocoa/80 md:text-lg">
            Cake by Moni kreiert emotionale Torten, feine Cupcakes und stilvolle Sweet Tables für Geburtstage,
            Hochzeiten und Events. Geschmack, Design und Service aus einer Hand.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-berry px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cocoa"
            >
              Jetzt Bestellung anfragen
            </Link>
            <a
              href="https://wa.me/41797725988"
              className="rounded-full border border-cocoa/15 px-6 py-3 text-sm font-semibold text-cocoa transition hover:border-cocoa hover:bg-white/70"
            >
              WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <span key={badge} className="chip-hover rounded-full border border-rose/80 bg-white px-4 py-2 text-xs font-semibold text-cocoa/85">
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-cocoa/70">{siteConfig.serviceArea}</p>
        </div>

        <div className="card-hover animate-fadeUp rounded-[2rem] border border-rose/40 bg-white p-4 shadow-soft md:p-5">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/50 bg-gradient-to-br from-[#f7dde3] via-[#ffece1] to-[#f7cad5] p-7">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/45 blur-2xl" />
            <div className="absolute -bottom-14 -left-14 h-44 w-44 rounded-full bg-[#f2bfcf]/35 blur-2xl" />
            <div className="relative">
              <p className="inline-flex rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-berry">
                Signature Service
              </p>
              <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight text-cocoa md:text-4xl">
                Torten, Cupcakes und Sweet Tables
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-cocoa/80">
                Für Geburtstage, Hochzeiten und Events. Personalisiert nach Stil, Farben und Anlass.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-cocoa/85">
                <span className="chip-hover rounded-full bg-white/85 px-3 py-1.5">Design nach Wunsch</span>
                <span className="chip-hover rounded-full bg-white/85 px-3 py-1.5">Frisch gebacken</span>
                <span className="chip-hover rounded-full bg-white/85 px-3 py-1.5">Abholung bevorzugt</span>
              </div>

              <Link
                href="/angebote"
                className="mt-6 inline-block rounded-full bg-berry px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cocoa"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-6">
        <div className="card-hover rounded-[2rem] border border-rose/50 bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">So läuft es</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <p key={step} className="chip-hover rounded-2xl bg-rose/60 px-4 py-3 text-sm font-medium text-cocoa">
                <span className="mr-2 text-berry">{index + 1}.</span>
                {step}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.title} className="card-hover rounded-[1.5rem] border border-rose/50 bg-white p-6">
              <h3 className="font-serif text-2xl text-cocoa">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa/80">{offer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 md:px-6">
        <div className="card-hover rounded-[2rem] border border-rose/50 bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">Beliebte Anlässe</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {occasions.map((occasion) => (
              <span key={occasion} className="chip-hover rounded-full bg-rose/70 px-4 py-2 text-sm font-medium text-cocoa">
                {occasion}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
