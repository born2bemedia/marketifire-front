'use server';

import { google } from 'googleapis';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_USER,
} from '@/shared/config/env';

import type { RequestState } from './request-form.store';

export async function sendRequest({
  companyName,
  fullName,
  phone,
  budget,
  website,
  email,
  file,
  services,
  goals,
  targetAudience,
  startDate,
  contactMethod,
}: Omit<RequestState, 'setData' | 'step'>) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    let fileBase64 = '';
    if (file) {
      const fileContent = await file.arrayBuffer();
      fileBase64 = Buffer.from(fileContent).toString('base64');
    }

    // Создание MIME сообщения с вложением
    const boundary = 'foo_bar_baz';
    const mimeMessage = [
      `From: ${EMAIL_USER}`,
      `To: ${EMAIL_USER}`,
      `Subject: New message from Request Form`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset="UTF-8"`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      `<p><b>Personal Data</b></p>
       <p><b>Full Name:</b> ${fullName}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Phone:</b> ${phone}</p>
       <p><b>Company Name:</b> ${companyName ?? 'None'}</p>
       <p><b>Website:</b> ${website ?? 'None'}</p>
       <p><b>Business & Marketing Data</b></p>
       <p><b>Services:</b> ${services.join(', ')}</p>
       <p><b>Budget:</b> ${budget}</p>
       <p><b>Goals & Challenges:</b> ${goals}</p>
       <p><b>Target Audience:</b> ${targetAudience}</p>
       <p><b>Start:</b> ${startDate}</p>
       <p><b>Contact Method:</b> ${contactMethod}</p>`,
      ...(file
        ? [
            ``,
            `--${boundary}`,
            `Content-Type: ${file.type}`,
            `Content-Disposition: attachment; filename="${file.name}"`,
            `Content-Transfer-Encoding: base64`,
            ``,
            fileBase64,
          ]
        : []),
      ``,
      `--${boundary}--`,
    ].join('\n');

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: Buffer.from(mimeMessage).toString('base64'),
      },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to send email. Status: ${res.status}`);
    }

    return { data: res.data, status: res.statusText };
  } catch (err: unknown) {
    console.error('Error order product:', err);

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Unknown error occurred.');
  }
}
