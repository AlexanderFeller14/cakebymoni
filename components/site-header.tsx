'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, primaryCta } from '@/lib/site';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rose/40 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="rounded-full bg-berry px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white transition group-hover:bg-cocoa">
            Cake by Moni
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-berry ${isActive ? 'text-berry' : 'text-cocoa/80'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={primaryCta.href}
            className="rounded-full bg-berry px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cocoa"
          >
            {primaryCta.label}
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-4 md:hidden">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`chip-hover shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                isActive ? 'bg-berry text-white' : 'border border-cocoa/15 bg-white text-cocoa/80'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
