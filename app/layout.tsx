import { ThemeProvider } from '@/components/theme-provider';
import { META_THEME_COLORS, siteConfig } from '@/config/site';

import { fontSans, fontMono } from '@/lib/fonts';
import { Toaster } from '@/components/ui/sonner';

import { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { SideNav } from '@/components/side-nav';
import { SiteFooter } from '@/components/site-footer';
import { docsConfig } from '@/config/docs';

import { setViewsServerAction } from './actions/getAndSetViewsServerAction';
import { getLoveCountServerAction } from './actions/getAndSetLoveCountServerAction';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: 'Ravish Bisht – Full Stack Developer | Next.js, MERN, DevOps & AI',
    template: '%s | Ravish Bisht',
  },

  description:
    'Ravish Bisht is a Full-Stack Developer specializing in Next.js, MERN Stack, DevOps, and AI integration. Explore projects, blog, and production-ready web solutions.',

  keywords: siteConfig.keywords,

  authors: [
    {
      name: 'Ravish Bisht',
      url: siteConfig.url,
    },
  ],

  creator: 'Ravish Bisht',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'Ravish Bisht – Full Stack Developer | Next.js, MERN, DevOps & AI',
    description:
      'Portfolio of Ravish Bisht – Full-Stack Developer building scalable web applications with modern technologies.',
    siteName: 'Ravish Bisht Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ravish Bisht – Full Stack Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ravish Bisht – Full Stack Developer',
    description:
      'Full-Stack Developer specializing in Next.js, MERN, DevOps & AI integration.',
    creator: '@ravish_bisht',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

async function loadStats() {
  try {
    await setViewsServerAction();
    await getLoveCountServerAction();
  } catch (error) {
    console.error('Failed to load stats:', error);
    return;
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  loadStats();
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Ravish Bisht',
                url: 'https://cykoravish.cloud',
                image: 'https://cykoravish.cloud/og-image.png',
                jobTitle: 'Full Stack Developer',
                description:
                  'Full Stack Developer specializing in Next.js, MERN Stack, DevOps, and AI integration.',
                sameAs: [
                  'https://github.com/cykoravish',
                  'https://x.com/ravish_bisht',
                  'https://www.linkedin.com/in/ravish-bisht-b607083a7/',
                  'https://t.me/cykoravish',
                ],
                knowsAbout: [
                  'Next.js',
                  'React',
                  'Node.js',
                  'MERN Stack',
                  'MongoDB',
                  'DevOps',
                  'Docker',
                  'CI/CD',
                  'AI Integration',
                  'JavaScript',
                ],
              }),
            }}
          />
        </head>
        <body
          className={cn(
            'min-h-svh bg-background font-sans antialiased',
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex flex-col min-h-svh bg-background">
                <div
                  data-wrapper=""
                  className="flex flex-col flex-1 border-grid"
                >
                  <SiteHeader />
                  <main className="flex flex-col flex-1">
                    <div className="container-wrapper">
                      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                        <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
                          <div className="h-full py-6 pr-4 overflow-auto no-scrollbar lg:py-8">
                            <SideNav config={docsConfig} />
                          </div>
                        </aside>
                        <div className="flex flex-col flex-1 py-6 pr-4 lg:py-8">
                          {children}
                        </div>
                      </div>
                    </div>
                  </main>
                  <SiteFooter />
                </div>
              </div>
            </div>
          </ThemeProvider>
          <Toaster richColors position="top-center" />
        </body>
      </html>
    </>
  );
}
