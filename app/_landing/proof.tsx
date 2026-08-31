'use client';

/**
 * Section 7 · proof.
 *
 * TWO proof surfaces back to back, deliberately rendered as two DIFFERENT
 * things: three exhibit-framed video cards, then a column-masonry wall of text
 * screenshots. Repeating one treatment twice reads as one long section the eye
 * gives up on; the change of form is what makes the second one land as more
 * proof rather than more of the same.
 *
 * ⚠️ NO PROOF ASSETS EXIST YET. The source copy carries a "Testimonial" table
 * and a "Text Screenshot" table with no items in either, so that is exactly
 * what renders: labelled empty frames at the ratios the real ones will take.
 * Nothing here invents a name, a quote, a city, a star rating or a result. A
 * fabricated testimonial is the one thing a wellness page can never come back
 * from.
 *
 * The counts below (3 clips, 6 screenshots) are LAYOUT, not copy: the source
 * names the two proof forms without saying how many of each exist. They are the
 * counts that tile cleanly, and they move the moment the client says how many
 * they actually have.
 *
 * TO GO LIVE: fill TESTIMONIALS with real clips (add `src`, and `name`/`meta`
 * only if the client has consent to show them) and SCREENSHOTS with real image
 * paths. Both grids render the real thing the moment the data is there; no
 * markup below has to change. If assets are still missing at launch, CUT this
 * section rather than shipping the frames.
 */
import { Images } from '@phosphor-icons/react/dist/ssr';

import { asset } from './asset-version';
import { legoBrick } from './lego-style';
import { C, SectionHeading } from './shared';

type Testimonial = { label: string; src?: string; poster?: string; meta?: string };
type Screenshot = { label: string; src?: string; alt?: string };

const TESTIMONIALS: Testimonial[] = [
  { label: 'Testimonial 1' },
  { label: 'Testimonial 2' },
  { label: 'Testimonial 3' },
];

const SCREENSHOTS: Screenshot[] = [
  { label: 'Text Screenshot' },
  { label: 'Text Screenshot' },
  { label: 'Text Screenshot' },
  { label: 'Text Screenshot' },
  { label: 'Text Screenshot' },
  { label: 'Text Screenshot' },
];

/* The empty state. Flat, ruled and honestly labelled: no gradient standing in
   for a photograph, and no invented poster art. It should look like a frame
   waiting for its exhibit, because that is what it is. */
function PendingFrame({ label, note }: { label: string; note: string }) {
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
      <span
        className="grid h-11 w-11 place-items-center rounded-full"
        style={{ background: C.goldPale }}
      >
        <Images weight="duotone" className="h-5 w-5" style={{ color: C.goldInk }} />
      </span>
      <span
        className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em]"
        style={{ color: C.ink }}
      >
        {label}
      </span>
      <span className="text-[11.5px]" style={{ color: C.inkSoft }}>
        {note}
      </span>
    </span>
  );
}

export default function Proof() {
  return (
    <section className="px-4 py-12 sm:py-20 lg:py-24" style={{ background: C.canvas }}>
      <SectionHeading sub="From busy professionals chasing bigger goals to homemakers constantly showing up for everyone else, these are real people who experienced S.T.A.R.T. Right to feel more energised, find greater calm & show up better for the life that matters to them.">
        Don&rsquo;t Take Our Word For It.
        <br className="hidden lg:inline" /> Hear From People Who&rsquo;ve
        Experienced <span style={{ color: C.goldDeep }}>S.T.A.R.T. Right</span>
      </SectionHeading>

      {/* ── 7a · the exhibit frames ──────────────────────────────────────
          Poster in a mat with an inner hairline ring, so each card reads as an
          exhibit rather than as a quote box, with an on-brand play disc instead
          of a platform-red triangle. */}
      <ul className="mx-auto mt-14 grid max-w-[360px] grid-cols-1 gap-5 sm:max-w-[1080px] sm:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <li
            key={t.label}
            data-lego=""
            /* No hover lift once a real clip is in: the card IS the player, and
               moving it under the cursor fights the scrub bar the reader is
               aiming at. Entrance animation only. */
            className="rounded-3xl p-3"
            style={{
              ...legoBrick(idx, 110),
              background: C.canvas,
              border: `1px solid ${C.line}`,
              boxShadow: '0 18px 40px -28px rgba(88,51,79,0.3)',
            }}
          >
            <div
              className="relative flex aspect-[9/14] items-center justify-center overflow-hidden rounded-2xl"
              style={{
                background: C.canvasAlt,
                boxShadow: `inset 0 0 0 1px ${C.line}`,
              }}
            >
              {t.src ? (
                /* No custom play disc over a native player: the browser's own
                   control is the affordance, and a decorative one on top of it
                   only gets in the way of the thing the reader is aiming at. */
                <video
                  src={asset(t.src)}
                  poster={t.poster ? asset(t.poster) : undefined}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={t.label}
                />
              ) : (
                <PendingFrame label={t.label} note="Video clip pending" />
              )}
            </div>
            {t.meta && (
              <p
                className="px-2 pb-1 pt-3 text-center text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: C.inkSoft }}
              >
                {t.meta}
              </p>
            )}
          </li>
        ))}
      </ul>

      {/* ── 7b · the wall ────────────────────────────────────────────────
          A different form on purpose: volume of proof at a glance, in a
          column-masonry so real screenshots of different heights tile without
          leaving holes. Separated by a hairline flourish rather than by a
          second headline, because the copy does not carry one. */}
      <div className="mx-auto mt-16 max-w-[1080px]">
        <div className="mb-10 flex items-center justify-center gap-3" aria-hidden>
          <span
            className="h-px w-16"
            style={{ background: `linear-gradient(90deg, transparent, ${C.goldMid})` }}
          />
          <span className="text-[11px]" style={{ color: C.goldDeep }}>
            ✦
          </span>
          <span
            className="h-px w-16"
            style={{ background: `linear-gradient(90deg, ${C.goldMid}, transparent)` }}
          />
        </div>

        <div className="kz-masonry">
          {SCREENSHOTS.map((s, idx) => (
            <figure
              key={idx}
              data-lego=""
              className="lego-hover-sm overflow-hidden rounded-2xl"
              style={{
                ...legoBrick(idx, 70),
                background: C.canvas,
                border: `1px solid ${C.line}`,
              }}
            >
              {s.src ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={asset(s.src)}
                  alt={s.alt || ''}
                  className="block h-auto w-full"
                  loading="lazy"
                />
              ) : (
                <span className="flex aspect-[4/5] w-full items-center justify-center">
                  <PendingFrame label={s.label} note="Screenshot pending" />
                </span>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
