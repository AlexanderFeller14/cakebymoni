import Link from 'next/link';

export function CtaBanner() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 pb-16 md:px-6">
      <div className="rounded-[2rem] bg-gradient-to-r from-berry via-[#9d4559] to-cocoa p-8 text-white shadow-soft md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.23em] text-white/90">Dein Event beginnt hier</p>
        <h3 className="mt-3 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
          Erzähl mir deine Idee und ich verwandle sie in eine Torte, die in Erinnerung bleibt.
        </h3>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-cocoa transition hover:-translate-y-0.5"
          >
            Jetzt Bestellung anfragen
          </Link>
          <a
            href="tel:+41797725988"
            className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
