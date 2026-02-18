import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Häufige Fragen zu Bestellung, Vorlaufzeit, Lieferung und Individualisierung für Torten, Cupcakes und Party Desserts.',
  alternates: {
    canonical: '/faq'
  }
};

const faqs = [
  {
    q: 'Wie früh soll ich bestellen?',
    a: 'Am besten 2 bis 4 Wochen im Voraus. Für Hochzeiten und grössere Sweet Tables empfehle ich 6 bis 8 Wochen Vorlauf.'
  },
  {
    q: 'Kann ich Design und Geschmack frei wählen?',
    a: 'Ja. Du kannst Stil, Farben, Thema und Geschmacksrichtung kombinieren. Ich berate dich gerne, damit alles harmonisch wirkt.'
  },
  {
    q: 'Bietest du Lieferung an?',
    a: 'Standardmässig erfolgt die Abholung. Lieferung kann bei Bedarf individuell vereinbart werden.'
  },
  {
    q: 'Gibt es Mindestmengen für Cupcakes oder Catering?',
    a: 'Cupcakes starten ab 12 Stück. Für Dessert Tables und Catering richtet sich die Menge nach Personenzahl und Eventkonzept.'
  },
  {
    q: 'Sind Allergien oder spezielle Ernährungswünsche möglich?',
    a: 'Ich prüfe jeden Wunsch individuell. Teile mir Allergien und Unverträglichkeiten bitte direkt bei der Anfrage mit.'
  },
  {
    q: 'Wie läuft die Bezahlung?',
    a: 'Nach finaler Absprache erhältst du eine Bestätigung. Die Zahlung erfolgt bequem nach vereinbarten Konditionen.'
  }
];

export default function FaqPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
      <SectionHeading
        eyebrow="FAQ"
        title="Häufige Fragen rund um deine Bestellung"
        text="Hier findest du die wichtigsten Antworten vorab. Wenn etwas offen bleibt, schreibe mir direkt über das Kontaktformular oder WhatsApp."
      />
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <article key={faq.q} className="card-hover rounded-[1.5rem] border border-rose/50 bg-white p-6">
            <h2 className="font-serif text-2xl text-cocoa">{faq.q}</h2>
            <p className="mt-3 text-sm leading-relaxed text-cocoa/80">{faq.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
