import { business } from "../site-data.mjs";

export const metadata = {
  applicationName: business.brandName,
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/structure.css" />
      </head>
      <body>
        {children}
        <a href="https://zalo.me/0393276052" target="_blank" rel="noopener noreferrer" className="zalo-floating-icon" aria-label="Liên hệ Zalo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original" alt="Zalo" />
        </a>
        <script src="/slider.js" defer></script>
      </body>
    </html>
  );
}
