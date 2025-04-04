export function htmlTemplate({
  body,
  style,
}: {
  style?: string;
  body: string;
}) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Marketifire</title>
        <style>
          ${style}
        </style>
      </head>
      <body>
        ${body}
      </body>
    </html>
  `;
}
