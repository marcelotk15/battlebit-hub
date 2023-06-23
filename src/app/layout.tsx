import './globals.css'

import { type Metadata } from 'next'

import { Providers } from '~/components/Providers'
import { cn } from '~/lib/utils'
import { fontSans } from '~/lib/fonts'
import { siteConfig } from '~/config/site'

import { LayoutHeader } from './layout-header'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  keywords: ['Battlebit', 'FPS'],
  authors: [
    {
      name: 'teka',
      url: 'https://teka.dev',
    },
  ],
  creator: 'teka',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    // creator: '@teka15',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <LayoutHeader />
            <div className="flex-1">{children}</div>

            {/* <SiteFooter /> */}
          </div>
        </Providers>
      </body>
    </html>
  )
}
