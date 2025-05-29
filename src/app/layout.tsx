import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components';

export const nunito = Nunito({
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aiqfome.com'),
  title: 'aiqfome - Delivery de comida direto no seu apê',
  description:
    'Peça delivery de comida no aiqfome! Encontre restaurantes, lanchonetes, mercados e muito mais perto de você.',
  keywords: 'delivery, comida, restaurante, lanche, pizza, aiqfome',
  authors: [{ name: 'aiqfome' }],
  creator: 'aiqfome',
  publisher: 'aiqfome',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.aiqfome.com',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.aiqfome.com',
    siteName: 'aiqfome',
    title: 'aiqfome - Delivery de comida direto no seu apê',
    description:
      'Peça delivery de comida no aiqfome! Encontre restaurantes, lanchonetes, mercados e muito mais perto de você.',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'aiqfome Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aiqfome - Delivery de comida direto no seu apê',
    description:
      'Peça delivery de comida no aiqfome! Encontre restaurantes, lanchonetes, mercados e muito mais perto de você.',
    images: ['/web-app-manifest-512x512.png'],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FF006B' },
    { media: '(prefers-color-scheme: dark)', color: '#FF006B' },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* TODO: Criar um componente layout que irá receber uma prop se deve ou não mostrar o search */}
      <body
        className={`${nunito.variable} flex min-h-screen flex-col font-nunito antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
