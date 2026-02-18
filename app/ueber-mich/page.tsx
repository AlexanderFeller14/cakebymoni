import type { Metadata } from 'next';
import { CtaBanner } from '@/components/cta-banner';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Lerne Moni kennen: die kreative Cake Designerin hinter Cake by Moni. Handwerk, Designgefühl und Leidenschaft für besondere Momente.',
  alternates: {
    canonical: '/ueber-mich'
  }
};

const values = [
  {
    title: 'Qualität zuerst',
    text: 'Ich arbeite mit ausgesuchten Zutaten und einer klaren Priorität: Geschmack muss so gut sein wie die Optik.'
  },
  {
    title: 'Persönlicher Service',
    text: 'Jede Bestellung wird individuell begleitet. Du bekommst ehrliche Empfehlungen und transparente Kommunikation.'
  },
  {
    title: 'Design mit Gefühl',
    text: 'Meine Kreationen verbinden moderne Eleganz mit warmem Homemade Charakter - abgestimmt auf deinen Anlass.'
  }
];

export default function UeberMichPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
        <SectionHeading
          eyebrow="Über Moni"
          title="Mit Liebe gebacken, mit Stil präsentiert"
          text="Ich bin Moni, Cake Designerin und Gründerin von Cake by Moni. Was als Leidenschaft begann, ist heute mein Herzensbusiness: individuelle Torten und Dessertkonzepte, die Emotionen auf den Tisch bringen."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1fr]">
          <article className="card-hover rounded-[2rem] border border-rose/50 bg-white p-7">
            <h2 className="font-serif text-3xl text-cocoa">Meine Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-cocoa/80">
              Schon früh habe ich für Familie und Freunde gebacken und gemerkt, wie stark gutes Dessert Menschen verbindet.
              Heute kombiniere ich handwerkliche Präzision, modernes Design und eine grosse Portion Herz, um aus jedem Event
              einen besonderen Moment zu machen.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cocoa/80">
              Ob intime Familienfeier oder grosser Hochzeitstag: Ich kreiere für dich ein stimmiges Gesamterlebnis, das optisch
              begeistert und geschmacklich überzeugt.
            </p>
          </article>

          <div className="card-hover rounded-[2rem] bg-gradient-to-br from-[#f4d4dc] via-[#ffe9dc] to-[#f8e3e8] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">Signature Stil</p>
            <ul className="mt-4 space-y-3 text-sm text-cocoa/90">
              <li>Soft Pastels, elegante Texturen, moderne Details</li>
              <li>Personalisierte Elemente wie Name, Alter, Thema</li>
              <li>Abgestimmte Farbwelten für ein harmonisches Event</li>
              <li>Feiner Mix aus klassisch und zeitgemäss</li>
            </ul>
          </div>
        </div>

        <div className="stagger mt-8 grid gap-4 md:grid-cols-3">
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
