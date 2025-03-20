import { NextResponse } from 'next/server';
import { google } from 'googleapis';

type OrderData = {
  product: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone: string;
  message: string;
  website: string;
};

function makeBody(
  to: string,
  from: string,
  subject: string,
  message: string,
): string {
  const emailLines = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    '',
    message,
  ];

  return Buffer.from(emailLines.join('\n'))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const bodyJSON = (await request.json()) as OrderData;
    const { product, email, firstName, lastName, phone, message, website } =
      bodyJSON;
    const customerName =
      firstName && lastName ? `${firstName} ${lastName}` : '';

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID!,
      process.env.EMAIL_CLIENT_SECRET!,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN!,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const adminEmailBody = makeBody(
      process.env.EMAIL_USER || '',
      process.env.EMAIL_USER || '',
      'New Order Received',
      `
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Website:</strong> ${website}</p>
      `,
    );

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: adminEmailBody },
    });

    return NextResponse.json({ message: 'Order email sent successfully.' });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending order email:', errorMessage);
    return NextResponse.json(
      { message: 'Failed to send order email.', error: errorMessage },
      { status: 500 },
    );
  }
}
