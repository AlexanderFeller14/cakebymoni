type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  eventDate?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: ContactPayload) {
  const errors: string[] = [];

  if (!payload.name?.trim()) errors.push('name');
  if (!payload.email?.trim() || !emailRegex.test(payload.email)) errors.push('email');
  if (!payload.phone?.trim()) errors.push('phone');
  if (!payload.eventDate?.trim()) errors.push('eventDate');
  if (!payload.message?.trim() || payload.message.trim().length < 20) errors.push('message');

  return errors;
}

function mapBrevoError(status: number): string {
  if (status === 401 || status === 403) {
    return 'Brevo API-Key ungültig oder ohne Berechtigung.';
  }
  if (status === 400) {
    return 'Brevo hat die Anfrage abgelehnt. Prüfe Absender-Adresse und Empfänger.';
  }
  if (status >= 500) {
    return 'Brevo ist aktuell nicht erreichbar. Bitte später erneut versuchen.';
  }
  return 'Beim Senden ist ein Fehler aufgetreten.';
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const errors = validate(payload);

    if (errors.length > 0) {
      return Response.json({ ok: false, error: 'Ungültige Eingaben.', fields: errors }, { status: 400 });
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const contactTo = process.env.CONTACT_TO_EMAIL;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;

    if (!brevoApiKey || !contactTo || !senderEmail) {
      return Response.json(
        { ok: false, error: 'E-Mail-Konfiguration fehlt. Bitte BREVO_API_KEY, BREVO_SENDER_EMAIL und CONTACT_TO_EMAIL setzen.' },
        { status: 500 }
      );
    }

    const subject = `Neue Anfrage von ${payload.name}`;
    const text = [
      `Name: ${payload.name}`,
      `E-Mail: ${payload.email}`,
      `Telefon: ${payload.phone}`,
      `Event Datum: ${payload.eventDate}`,
      '',
      'Nachricht:',
      payload.message
    ].join('\n');

    const html = `
      <h2>Neue Anfrage über das Kontaktformular</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>E-Mail:</strong> ${payload.email}</p>
      <p><strong>Telefon:</strong> ${payload.phone}</p>
      <p><strong>Event Datum:</strong> ${payload.eventDate}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${payload.message?.replace(/\n/g, '<br />')}</p>
    `;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: 'Cake by Moni Website' },
        to: [{ email: contactTo }],
        replyTo: { email: payload.email, name: payload.name },
        subject,
        textContent: text,
        htmlContent: html
      })
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('Brevo API error:', response.status, detail);
      return Response.json({ ok: false, error: mapBrevoError(response.status) }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form mail error:', error);
    return Response.json({ ok: false, error: 'Beim Senden ist ein Fehler aufgetreten.' }, { status: 500 });
  }
}
