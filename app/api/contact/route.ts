import nodemailer from 'nodemailer';

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

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const errors = validate(payload);

    if (errors.length > 0) {
      return Response.json({ ok: false, error: 'Ungültige Eingaben.', fields: errors }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO_EMAIL ?? smtpUser;

    if (!smtpUser || !smtpPass || !contactTo) {
      return Response.json(
        { ok: false, error: 'E-Mail-Konfiguration fehlt. Bitte SMTP_USER, SMTP_PASS und CONTACT_TO_EMAIL setzen.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.office365.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

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

    await transporter.sendMail({
      from: `"Cake by Moni Website" <${smtpUser}>`,
      to: contactTo,
      replyTo: payload.email,
      subject,
      text,
      html
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: 'Beim Senden ist ein Fehler aufgetreten.' }, { status: 500 });
  }
}
