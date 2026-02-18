import type { Metadata } from 'next';
import { CtaBanner } from '@/components/cta-banner';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Lerne Monika Feller kennen: die kreative Cake Designerin hinter Cake by Moni. Handwerk, Designgefühl und Leidenschaft für besondere Momente.',
  alternates: {
    canonical: '/ueber-mich'
  }
};

const highlights = ['100% handgemacht', 'Antwort innert kurzer Zeit', 'Persönlich abgestimmte Designs'];

export default function UeberMichPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-12 md:px-6 md:pt-16">
        <SectionHeading
          eyebrow="Über Monika"
          title="Mit Liebe gebacken, mit Stil präsentiert"
          text="Ich bin Monika Feller, Cake Designerin hinter Cake by Moni. Ich gestalte individuelle Torten und Dessertkonzepte für besondere Momente."
        />

        <div className="mt-10 space-y-6">
          <article className="about-story card-hover rounded-[2rem] border border-rose/50 bg-white p-7 md:p-8">
            <p className="about-kicker text-xs font-semibold uppercase tracking-[0.18em] text-berry">Meine Story</p>
            <h2 className="mt-3 font-serif text-3xl text-cocoa">Von Leidenschaft zu Cake by Moni</h2>
            <p className="mt-4 text-sm leading-relaxed text-cocoa/80">
              Aus Leidenschaft fürs Backen wurde mein Hobby, das mich bis heute begleitet und inspiriert. Was mit kleinen
              Kreationen für Familie und Freunde begann, entwickelte sich Schritt für Schritt zu individuellen Torten, Cupcakes
              und Gebäck für besondere Anlässe. Mir ist wichtig, dass jedes Dessert nicht nur optisch passt, sondern auch mit
              Geschmack, Qualität und viel Liebe in Erinnerung bleibt.
            </p>
          </article>

          <aside className="card-hover rounded-[2rem] border border-rose/50 bg-white p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">So arbeite ich</p>
            <p className="mt-3 text-sm leading-relaxed text-cocoa/80">
              Persönliche Beratung, klare Absprachen und frische Umsetzung stehen für mich im Mittelpunkt.
            </p>
            <div className="mt-4 space-y-2 text-sm text-cocoa/85">
              <p>• Individuelle Abstimmung auf deinen Anlass</p>
              <p>• Ehrliche Empfehlungen zu Design und Menge</p>
              <p>• Zuverlässige Planung bis zur Abholung</p>
            </div>
          </aside>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span key={item} className="about-pill chip-hover rounded-full border border-rose/80 bg-white px-4 py-2 text-xs font-semibold text-cocoa/85">
              {item}
            </span>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
