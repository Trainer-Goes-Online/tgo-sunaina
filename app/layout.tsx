import type { Metadata, Viewport } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';

import Analytics from '@/components/Analytics';
import MetaPixel from '@/components/MetaPixel';
import LegoObserver from './_landing/lego';
import { PRICE, SESSION_TIMES, START_DATE } from './_landing/offer';
import './globals.css';

/**
 * Two faces, three voices.
 *
 * Bricolage Grotesque (display) is a humanist grotesque with a deliberate
 * irregularity in its curves: it reads as a person rather than a corporation,
 * which is what a coach-led morning practice needs. It carries width and
 * optical-size axes, so a big morning headline takes its presence from WIDTH
 * and scale rather than from weight. That matters: a bold neutral-grotesque
 * stack reads cheap at display size. It never appears below headline size, and
 * it also sets the wordmark while no logo file exists.
 *
 * Inter (body) does the reading, at a 17px base: an early-morning page is read
 * on a phone before the day starts, and nothing on it relies on a hairline
 * weight. Inter and Bricolage share a grotesque skeleton, so they sit together
 * without friction while staying clearly distinct in temperament.
 *
 * The third voice, the "spec" one that labels and credentials use, is tracked
 * uppercase Inter rather than a monospace. That is a deliberate exception to
 * the house three-voice rule: a mono reads clinical against a stillness,
 * breathwork and affirmations offer, and tracked caps do the same job in the
 * right register. Noted in design-system.project.md.
 */
/* DM Serif Display ships ONE weight, 400, and that is the whole reason the
   headings below carry no font-weight class any more. A 400-only face asked for
   600 does not fall back, the browser SYNTHESISES the bold by smearing the
   outline, and on a high-contrast serif with hairline strokes that reads as a
   rendering fault rather than as emphasis. Presence comes from size and from
   the real italic instead.

   The weight array is not optional here either: next/font rejects a
   non-variable family declared without one. */
const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const TITLE = "6-Day 'Start Your Morning Right' Challenge | S.T.A.R.T. Right";

const DESCRIPTION = `Six live, expert-guided mornings combining stillness, movement, affirmations, breathwork and connection, with Sunaina Setia. Starts ${START_DATE}, ${SESSION_TIMES}, live on Zoom, for ${PRICE}.`;

/* The live origin. Without a metadataBase Next resolves every share URL and
   every relative OG asset against localhost, so a link pasted into WhatsApp
   previews as a dead local address.

   This is deliberately defensive, because metadataBase is evaluated at BUILD
   time on every route including the generated /_not-found. A bad value here
   does not degrade the page, it fails the deploy:

     `??` does NOT catch an empty string. A host that defines the variable with
     a blank value (Vercel does exactly this when the key is added without one)
     gives new URL('') and ERR_INVALID_URL, which is what broke the Kaizen
     build.

   So: fall back on any falsy value rather than only on null, add the protocol
   if someone pastes a bare domain, and if it still will not parse, use the
   literal rather than throwing.

   ⚠️ PLACEHOLDER. The launch domain is not known yet, so FALLBACK_ORIGIN is
   still example.com. Replace it with the real origin, and keep it identical to
   `fallbackEventSourceUrl` in lib/checkout-config.ts. */
const FALLBACK_ORIGIN = 'https://example.com';

function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();
  if (!raw) return FALLBACK_ORIGIN;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return FALLBACK_ORIGIN;
  }
}

const SITE_URL = resolveSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'S.T.A.R.T. Right',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#58334F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>
        {/* Marks the document as JS-capable BEFORE first paint, so the CSS
            scroll reveals only hide content when JS is there to reveal it.
            No-JS users and crawlers see everything, and there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('bw-js')",
          }}
        />
        {/* One set of observers for the whole document, mounted here rather
            than per-section. Renders nothing. */}
        <LegoObserver />
        <MetaPixel />
        {/* GA4 + Clarity, from env. Renders nothing until the ids are set.
            Without this the browser-side GA4 calls are silent no-ops and the
            webhook reports purchases with no funnel above them. */}
        <Analytics />
        {children}
      </body>
    </html>
  );
}
