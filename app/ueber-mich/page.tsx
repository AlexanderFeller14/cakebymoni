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

const values = [
  {
    title: 'Qualität zuerst',
    text: 'Ausgesuchte Zutaten und ein Anspruch: Geschmack und Optik müssen gleich stark sein.'
  },
  {
    title: 'Persönlicher Service',
    text: 'Direkte Beratung, klare Empfehlungen und ein Design, das zu deinem Anlass passt.'
  }
];

const highlights = ['100% handgemacht', 'Antwort innert kurzer Zeit', 'Persönlich abgestimmte Designs'];

export default function UeberMichPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
        <SectionHeading
          eyebrow="Über Monika"
          title="Mit Liebe gebacken, mit Stil präsentiert"
          text="Ich bin Monika Feller, Cake Designerin hinter Cake by Moni. Ich gestalte individuelle Torten und Dessertkonzepte für besondere Momente."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <article className="about-story card-hover rounded-[2rem] border border-rose/50 bg-white p-7 md:p-8">
            <p className="about-kicker text-xs font-semibold uppercase tracking-[0.18em] text-berry">Meine Story</p>
            <h2 className="mt-3 font-serif text-3xl text-cocoa">Von Leidenschaft zu Cake by Moni</h2>
            <p className="mt-4 text-sm leading-relaxed text-cocoa/80">
              Aus einer Leidenschaft fürs Backen wurde mein Herzensbusiness. Heute verbinde ich präzises Handwerk mit modernem
              Design, damit dein Anlass nicht nur schön aussieht, sondern auch fein schmeckt.
            </p>
            <p className="about-quote mt-5 rounded-2xl border border-rose/50 bg-rose/60 px-4 py-3 text-sm text-cocoa/85">
              Jede Torte soll zu deinem Anlass passen und sich wie ein persönliches Statement anfühlen.
            </p>
          </article>

          <div className="about-signature card-hover rounded-[2rem] bg-gradient-to-br from-[#f4d4dc] via-[#ffe9dc] to-[#f8e3e8] p-7 md:p-8">
            <p className="about-signature-label text-xs font-semibold uppercase tracking-[0.2em] text-berry">Signature Stil</p>
            <ul className="mt-4 space-y-3 text-sm text-cocoa/90">
              <li className="about-list-item">Soft Pastels, elegante Texturen, moderne Details</li>
              <li className="about-list-item">Personalisierte Elemente wie Name, Alter und Thema</li>
              <li className="about-list-item">Abgestimmte Farbwelten für ein harmonisches Event</li>
              <li className="about-list-item">Feiner Mix aus klassisch und zeitgemäss</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span key={item} className="about-pill chip-hover rounded-full border border-rose/80 bg-white px-4 py-2 text-xs font-semibold text-cocoa/85">
              {item}
            </span>
          ))}
        </div>

        <div className="stagger mt-8 grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="card-hover rounded-[1.5rem] border border-rose/50 bg-white p-5">
              <h3 className="font-serif text-2xl text-cocoa">{value.title}</h3>
              <p className="mt-3 text-sm text-cocoa/80">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
