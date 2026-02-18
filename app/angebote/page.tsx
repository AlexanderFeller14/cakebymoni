import type { Metadata } from 'next';
import { CtaBanner } from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'Angebote',
  description:
    'Individuelle Torten, Cupcakes, Güetzi und weiteres Kleingebäck. Bei Cake by Moni bekommst du vielfältige Backwaren nach Wunsch für jeden Anlass.',
  alternates: {
    canonical: '/angebote'
  }
};

const offerBlocks = [
  {
    title: 'Torten',
    text: 'Individuelle Torten für Geburtstage, Hochzeiten und Jubiläen.',
    details: ['Design nach Wunsch', 'Geschmack frei wählbar']
  },
  {
    title: 'Cupcakes',
    text: 'Frisch gebackene Cupcakes als Ergänzung oder eigener Hingucker.',
    details: ['Mehrere Sorten', 'Passend zum Anlass dekoriert']
  },
  {
    title: 'Güetzi & Gebäck',
    text: 'Hausgemachte Güetzi, Cookies und Kleingebäck.',
    details: ['Saisonal oder klassisch', 'Ideal für Apéros']
  },
  {
    title: 'Alles, was man backen kann',
    text: 'Spezialwünsche setze ich gerne persönlich für dich um.',
    details: ['Individuelle Beratung', 'Flexible Umsetzung']
  }
];

export default function AngebotePage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-12 md:px-6 md:pt-16">
        <div className="angebote-shell card-hover overflow-hidden rounded-[2rem] border border-rose/50 bg-white">
          <div className="angebote-hero bg-gradient-to-r from-[#f8dce3] via-[#ffe9dc] to-[#f6d8e2] px-6 py-8 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">Angebot</p>
            <h1 className="mt-3 max-w-3xl font-serif leading-tight text-cocoa">
              <span className="block text-3xl md:text-4xl">Torten, Cupcakes und Gebäck nach deinem Wunsch</span>
              <span className="mt-1.5 block text-xl font-medium md:text-2xl">
                Persönlich, frisch und mit viel Liebe gemacht.
              </span>
            </h1>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid gap-7 md:grid-cols-2">
              {offerBlocks.map((block) => (
                <div key={block.title} className="angebote-item rounded-[1.4rem] border border-rose/50 bg-rose/60 p-5">
                  <h2 className="font-serif text-2xl text-cocoa">{block.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa/80">{block.text}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-cocoa/85">
                    {block.details.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="angebote-note mt-7 rounded-[1.4rem] border border-rose/50 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-berry">Hinweis</p>
              <p className="mt-2 text-sm leading-relaxed text-cocoa/80">
                Früh anfragen lohnt sich.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
