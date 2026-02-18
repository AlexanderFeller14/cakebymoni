'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, primaryCta } from '@/lib/site';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rose/40 bg-cream/95 backdrop-blur">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto] items-center px-4 py-4 md:flex md:justify-between md:px-6">
        <Link href="/" className="group mx-auto inline-flex items-center gap-2 md:mx-0">
          <Image
            src="/gallery/cakebymoni-logo-1.png"
            alt="Cake by Moni"
            width={128}
            height={128}
            className="h-14 w-auto transition group-hover:opacity-90 md:h-16"
            priority
          />
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

        <div className="flex items-center justify-end gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Link
            href={primaryCta.href}
            className="hidden rounded-full bg-berry px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cocoa md:inline-flex"
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
