import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Galerie mit Custom Cakes, Cupcakes und Sweet Tables von Cake by Moni. Inspiration für Geburtstag, Hochzeit und Event in der Schweiz.',
  alternates: {
    canonical: '/galerie'
  }
};

const galleryItems = [
  'Elegant White Wedding Cake',
  'Boho Birthday Cake in Blush',
  'Pastel Cupcake Collection',
  'Floral Anniversary Cake',
  'Taufe Dessert Table',
  'Chocolate Berry Celebration Cake',
  'Minimal Chic Number Cake',
  'Pink Gold Sweet Table',
  'Unicorn Party Cupcakes',
  'Naked Cake mit frischen Beeren',
  'Corporate Event Dessert Tray',
  'Taufe Signature Cake'
];

export default function GaleriePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pt-16">
      <SectionHeading
        eyebrow="Galerie"
        title="Instagram-Style Einblicke in echte Aufträge"
        text="Jede Kreation ist einzigartig und wird auf Anlass, Farbwelt und Stimmung abgestimmt. Folge Cake by Moni auf Instagram für tägliche Inspiration."
      />

      <div className="stagger mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {galleryItems.map((item, index) => (
          <article
            key={item}
            className="card-hover overflow-hidden rounded-[1.5rem] border border-rose/50 bg-white"
            style={{ animationDelay: `${(index % 6) * 80}ms` }}
          >
            <div
              className="aspect-square"
              style={{
                background:
                  index % 2 === 0
                    ? 'linear-gradient(140deg, #f4d4dc 0%, #ffe9dc 100%)'
                    : 'linear-gradient(140deg, #ffe9dc 0%, #f8e3e8 100%)'
              }}
            />
            <p className="px-3 py-3 text-xs font-medium text-cocoa/85 md:text-sm">{item}</p>
          </article>
        ))}
      </div>

      <div className="card-hover mt-10 rounded-[2rem] border border-rose/50 bg-white p-6 text-center md:p-8">
        <p className="text-sm text-cocoa/80">Noch mehr aktuelle Werke und Behind-the-Scenes findest du auf Instagram.</p>
        <Link
          href={siteConfig.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block rounded-full bg-berry px-6 py-3 text-sm font-semibold text-white transition hover:bg-cocoa"
        >
          Zu @cakebymoni
        </Link>
      </div>
    </section>
  );
}
