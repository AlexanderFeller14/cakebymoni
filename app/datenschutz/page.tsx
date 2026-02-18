import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Cake by Moni für Website-Besucherinnen und Besucher.',
  alternates: {
    canonical: '/datenschutz'
  }
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
      <h1 className="font-serif text-4xl text-cocoa">Datenschutz</h1>
      <div className="card-hover mt-6 space-y-4 rounded-[1.5rem] border border-rose/50 bg-white p-6 text-sm leading-relaxed text-cocoa/85">
        <p>
          Diese Datenschutzerklärung informiert über die Art, den Umfang und den Zweck der Bearbeitung von personenbezogenen
          Daten auf dieser Website.
        </p>
        <p>
          <strong>Verantwortliche Stelle:</strong>
          <br />
          Cake by Moni
          <br />
          [Adresse Platzhalter]
          <br />
          [E-Mail Platzhalter]
        </p>
        <p>
          <strong>Erhobene Daten:</strong>
          <br />
          Bei Nutzung des Kontaktformulars werden Name, E-Mail, Telefon, Event Datum und Nachricht zur Bearbeitung deiner Anfrage verarbeitet.
        </p>
        <p>
          <strong>Zweck der Verarbeitung:</strong>
          <br />
          Die Daten werden ausschliesslich zur Kommunikation, Angebotserstellung und Auftragsabwicklung verwendet.
        </p>
        <p>
          <strong>Aufbewahrung:</strong>
          <br />
          Daten werden nur solange gespeichert, wie es für die Bearbeitung erforderlich ist oder gesetzliche Pflichten bestehen.
        </p>
        <p>
          <strong>Rechte:</strong>
          <br />
          Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner personenbezogenen Daten im gesetzlichen Rahmen.
        </p>
      </div>
    </section>
  );
}
