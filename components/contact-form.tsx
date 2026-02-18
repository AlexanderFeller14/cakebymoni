'use client';

import { FormEvent, useMemo, useState } from 'react';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  message: ''
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const minDate = useMemo(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  }, []);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = 'Bitte Namen eingeben.';
    if (!values.email.trim()) {
      nextErrors.email = 'Bitte E-Mail eingeben.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Bitte gültige E-Mail verwenden.';
    }

    if (!values.phone.trim()) nextErrors.phone = 'Bitte Telefonnummer eingeben.';
    if (!values.eventDate.trim()) nextErrors.eventDate = 'Bitte Event Datum auswählen.';
    if (!values.message.trim()) {
      nextErrors.message = 'Bitte kurz beschreiben, was du dir wünschst.';
    } else if (values.message.trim().length < 20) {
      nextErrors.message = 'Bitte mindestens 20 Zeichen schreiben.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      setSubmitError(null);
      return;
    }

    setErrors({});
    setIsSending(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? 'Senden fehlgeschlagen.');
      }

      setIsSubmitted(true);
      setValues(initialValues);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Senden fehlgeschlagen.';
      setSubmitError(message);
      setIsSubmitted(false);
    } finally {
      setIsSending(false);
    }
  };

  const baseInput =
    'w-full rounded-2xl border border-rose/50 bg-white px-4 py-3 text-sm text-cocoa outline-none transition focus:border-berry focus:ring-2 focus:ring-berry/20';

  return (
    <form onSubmit={handleSubmit} className="card-hover rounded-[2rem] border border-rose/50 bg-white p-6 shadow-soft md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-cocoa">
            Name
          </label>
          <input
            id="name"
            className={baseInput}
            value={values.name}
            onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Vorname Nachname"
          />
          {errors.name ? <p className="mt-1 text-xs text-berry">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-cocoa">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            className={baseInput}
            value={values.email}
            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="name@beispiel.ch"
          />
          {errors.email ? <p className="mt-1 text-xs text-berry">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cocoa">
            Telefon
          </label>
          <input
            id="phone"
            className={baseInput}
            value={values.phone}
            onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder="079 772 59 88"
          />
          {errors.phone ? <p className="mt-1 text-xs text-berry">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="eventDate" className="mb-2 block text-sm font-medium text-cocoa">
            Event Datum
          </label>
          <input
            id="eventDate"
            type="date"
            min={minDate}
            className={baseInput}
            value={values.eventDate}
            onChange={(e) => setValues((prev) => ({ ...prev, eventDate: e.target.value }))}
          />
          {errors.eventDate ? <p className="mt-1 text-xs text-berry">{errors.eventDate}</p> : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-cocoa">
          Nachricht
        </label>
        <textarea
          id="message"
          rows={5}
          className={baseInput}
          value={values.message}
          onChange={(e) => setValues((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Welcher Anlass, wie viele Personen, welches Design wünschst du dir?"
        />
        {errors.message ? <p className="mt-1 text-xs text-berry">{errors.message}</p> : null}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="submit"
          disabled={isSending}
          className="rounded-full bg-berry px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cocoa disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? 'Wird gesendet...' : 'Jetzt Bestellung anfragen'}
        </button>
        <a href="https://wa.me/41797725988" className="text-sm font-semibold text-berry transition hover:-translate-y-0.5 hover:text-cocoa">
          Oder via WhatsApp anfragen
        </a>
      </div>

      {isSubmitted ? (
        <p className="chip-hover mt-4 rounded-2xl bg-rose px-4 py-3 text-sm text-cocoa">
          Danke! Deine Anfrage ist eingegangen. Ich melde mich schnellstmöglich mit einem Vorschlag bei dir.
        </p>
      ) : null}

      {submitError ? (
        <p className="mt-4 rounded-2xl border border-berry/25 bg-white px-4 py-3 text-sm text-berry">{submitError}</p>
      ) : null}
    </form>
  );
}
