import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Cake by Moni gemäss schweizerischen Informationspflichten.',
  alternates: {
    canonical: '/impressum'
  }
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
      <h1 className="font-serif text-4xl text-cocoa">Impressum</h1>
      <div className="card-hover mt-6 space-y-4 rounded-[1.5rem] border border-rose/50 bg-white p-6 text-sm leading-relaxed text-cocoa/85">
        <p>
          <strong>Cake by Moni</strong>
          <br />
          Reitigasse 6
          <br />
          3422 Rüdtligen, Schweiz
        </p>
        <p>
          Telefon: 079 772 59 88
        </p>
        <p>
          Vertretungsberechtigte Person: Monika Feller
          <br />
          Rechtsform: Einzelunternehmen
        </p>
        <p>Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für externe Links übernommen.</p>
      </div>
    </section>
  );
}
