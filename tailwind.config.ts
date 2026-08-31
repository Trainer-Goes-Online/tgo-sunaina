import type { Config } from 'tailwindcss';

/**
 * S.T.A.R.T. Right · 6-Day 'Start Your Morning Right' Challenge.
 *
 * SUNRISE skin. Warm ivory is the environment, deep plum is the structure,
 * apricot is the accent and sunrise coral is the CTA. This replaces the
 * inherited Kaizen palette outright: nothing navy or marigold survives.
 *
 * Third copy of one palette, after app/globals.css and app/_landing/shared.tsx.
 * All three move together. See design-system.project.md for the contrast maths
 * behind every value, and for the surface-vs-ink rule that governs the accents.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: { DEFAULT: '#FFF9F1', alt: '#FBEDE5' },
        /* ink = the plum headline. body = espresso. soft = warm taupe. */
        ink: { DEFAULT: '#58334F', body: '#302724', soft: '#746763' },
        plum: { DEFAULT: '#58334F', deeper: '#40243A', bed: '#F3E8EF' },
        gold: {
          DEFAULT: '#F2B45F',
          pale: '#F5F0E8',
          wash: '#FDF0DC',
          mid: '#E0A44F',
          deep: '#A96F17',
          ink: '#8F5B0D',
        },
        coral: { DEFAULT: '#E96F55', bed: '#FDEBE5', ink: '#B93B23' },
        rose: { bed: '#F7E6E1' },
        line: { DEFAULT: '#EFE3D8', strong: '#E0CDBC' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { pill: '999px' },
      boxShadow: {
        /* Layered and tinted toward the brand PLUM, never a flat grey (C4).
           These were still tinted toward Kaizen's navy until this pass. */
        soft: '0 4px 20px -10px rgba(88,51,79,0.14)',
        card: '0 18px 44px -26px rgba(88,51,79,0.26)',
        lift: '0 2px 0 0 rgba(224,164,79,0.30), 0 22px 42px -22px rgba(88,51,79,0.34)',
      },
    },
  },
  plugins: [],
};

export default config;
