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
  { src: '/gallery/IMG_2908.png', title: 'Eröffnungsapéro' },
  { src: '/gallery/4AE50FB3-7D8B-45CD-A7D5-CB42EA6E30DF.JPG', title: 'Schoko-Brombeeren Cupcake' },
  { src: '/gallery/FullSizeRender.png', title: 'Hochzeitstorte' },
  { src: '/gallery/IMG_1151.png', title: 'Apéro Häppchen' },
  { src: '/gallery/IMG_2839.png', title: 'Biene Maya Geburtstagstorte' },
  { src: '/gallery/IMG_2262.JPG', title: 'Apéro-Tisch' },
  { src: '/gallery/IMG_2462.JPG', title: 'Zweistöckige Geburtstagstorte' },
  { src: '/gallery/004023e9-2207-40bd-87d0-80a3ef42e6c3.JPG', title: 'Omlettröllchen' },
  { src: '/gallery/IMG_2555.png', title: 'Rote mini Cupcakes' },
  { src: '/gallery/IMG_1882.png', title: 'Blaue Cupcakes' },
  { src: '/gallery/0a0fab23-2630-469c-a8b0-2f553669ab5d.JPG', title: 'Geburtstagstorte' },
  { src: '/gallery/IMG_5410.JPG', title: 'Schwein Geburtstagstorte' },
  { src: '/gallery/IMG_6597.JPG', title: 'Dino Geburtstagstorte' },
  { src: '/gallery/e8f7f92e-3d69-4647-b67a-4e33b9ad844d.JPG', title: 'Apéro Platte mit Käse und Fleisch' },
  { src: '/gallery/FullSizeRender-3.png', title: 'Regenbogenfisch Geburtstagstorte' }
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
            key={item.src}
            className="card-hover overflow-hidden rounded-[1.5rem] border border-rose/50 bg-white"
            style={{ animationDelay: `${(index % 6) * 80}ms` }}
          >
            <img src={item.src} alt={item.title} className="aspect-square w-full object-cover" loading="lazy" />
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
          @cakebymoni
        </Link>
      </div>
    </section>
  );
}
