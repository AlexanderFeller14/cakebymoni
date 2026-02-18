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
  { code: 'DU2W6QVDPzD', title: 'Elegant White Wedding Cake' },
  { code: 'DT5zvHtDBWP', title: 'Boho Birthday Cake in Blush' },
  { code: 'DT5ziccDBKV', title: 'Pastel Cupcake Collection' },
  { code: 'DTkeKaRjDlO', title: 'Floral Anniversary Cake' },
  { code: 'DThfpXPDBrc', title: 'Taufe Dessert Table' },
  { code: 'DS0hlyzjPd0', title: 'Chocolate Berry Celebration Cake' },
  { code: 'DSzjMo_jIjX', title: 'Minimal Chic Number Cake' },
  { code: 'DSxo-U0jFY-', title: 'Pink Gold Sweet Table' },
  { code: 'DSxo102jDhs', title: 'Unicorn Party Cupcakes' },
  { code: 'DSxozY2DOaZ', title: 'Naked Cake mit frischen Beeren' },
  { code: 'DSrY4eGDADU', title: 'Corporate Event Dessert Tray' },
  { code: 'DSpMwfojK9K', title: 'Taufe Signature Cake' }
];

const fallbackGradients = [
  'linear-gradient(135deg, #f6d7de 0%, #fce9d8 100%)',
  'linear-gradient(135deg, #f8e5ec 0%, #f5dfd6 100%)',
  'linear-gradient(135deg, #f3d8d0 0%, #fde6c9 100%)',
  'linear-gradient(135deg, #f5dbe5 0%, #f9e8dd 100%)',
  'linear-gradient(135deg, #f8e6d4 0%, #f2d7d9 100%)',
  'linear-gradient(135deg, #f4dce8 0%, #fce7d6 100%)'
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
            key={item.code}
            className="card-hover overflow-hidden rounded-[1.5rem] border border-rose/50 bg-white"
            style={{ animationDelay: `${(index % 6) * 80}ms` }}
          >
            <a href={`https://www.instagram.com/p/${item.code}/`} target="_blank" rel="noreferrer">
              <div
                className="aspect-square w-full bg-cover bg-center"
                role="img"
                aria-label={item.title}
                style={{
                  backgroundImage: `url("https://www.instagram.com/p/${item.code}/media/?size=l"), ${fallbackGradients[index % fallbackGradients.length]}`
                }}
              />
            </a>
            <p className="px-3 py-3 text-xs font-medium text-cocoa/85 md:text-sm">{item.title}</p>
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
