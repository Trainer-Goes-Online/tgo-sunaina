# Skin · S.T.A.R.T. Right SUNRISE (project override)

> Layer 3 skin for `/workspace/tgo-sunaina` (S.T.A.R.T. Right · 6-Day 'Start
> Your Morning Right' Challenge, with Sunaina Setia). This is the **locked
> challenge skin** (`~/.claude/system/design-system.skin.kaizen-challenge.md`)
> with its palette and its two font vars rotated per client, which is
> exactly the change the locked skin permits. Section rhythm, component anatomy,
> effects, timings and easing are untouched. The brain
> (`~/.claude/system/design-system.base.md`, concepts C1-C13 + recipes R1-R12)
> is unchanged and still wins any disagreement.
>
> Structure comes from the CHALLENGE FUNNEL BLUEPRINT in
> `~/.claude/shape/structure-library.md` (17 beats), copy comes verbatim from
> `COPY-SOURCE.md`.

## The one-line brief
**A light, warm page with a single dark plum hero.** Every section band below
the hero is light. Dark is allowed only as a *contained object* inside a light
band (the Daily Live Morning Sessions card, the Option 2 card) and in the
colophon footer, never as another full section band.

## Palette: Sunrise

Named for the moment the copy is actually about: a 7 AM practice, and the light
that arrives during it.

**This palette replaces Blue Hour, which argued the opposite case.** That skin
read the same copy as "deep indigo going to first light, not sunrise orange",
and refused the warm direction on the grounds that warm cream and terracotta is
the look every AI-generated wellness page currently wears. That objection was
correct and it still stands, so this palette has to answer it rather than walk
into it.

It answers it with the plum. Warm cream plus terracotta is the generic pairing;
warm ivory plus a **deep aubergine plum** is not, and the plum is what keeps the
page from reading as another sunlit wellness template. The plum does the work
indigo used to do (structure, stillness, authorship) while sitting in the warm
half of the wheel, so the page is warm throughout instead of warm accents
bolted onto a cool frame.

The hues still carry the method's own split. The copy weighs movement and
energy (18 mentions) against stillness, breathwork and calm (17), so:
**plum is the stillness, apricot is the energy, and coral is the moment the
sun actually breaks.** Apricot also remains the right register for an Indian
morning practice, where it reads as native rather than decorative.

This is a **re-skin, not a new architecture**: one dark stage, one warm accent,
one CTA colour, three (now four) icon beds. The `gold*` and `coral*` token
names are unchanged because each hue moved within its own family. The plum
family was renamed from `navy*`, because that one no longer described what it
held.

```
/* environment: warm ivory, never pure white (C12) */
--canvas:       #FFF9F1   /* Warm Ivory. 60 to 70% of the page */
--canvas-2:     #FBEDE5   /* Blush Cream. The alternating band */

/* the plum stage. Also the headline ink on light: one colour, two jobs, and
   that is what ties the dark hero to the pale page under it. */
--plum-deep:    #58334F   /* Deep Plum. Stage floor and every headline. 10:1 */
--plum-deeper:  #40243A   /* the gradient floor beneath it, so the stage has depth */
--plum-bed:     #F3E8EF   /* plum-tinted icon bed. Plum reads 8.7:1 on it */

/* ink: plum heads, espresso reads, taupe supports */
--ink:          #58334F   /* Deep Plum. Headings and emphasis.  10.0:1 on canvas */
--ink-body:     #302724   /* Espresso. Body copy, set on <body>. 13.9:1 */
--ink-soft:     #746763   /* Warm Taupe. Supporting text.  5.2:1 / 4.8:1 on blush */
--on-dark:      #FFF9F1   /* ivory on the stage. 10.0:1 */
--on-dark-mute: rgba(255,249,241,0.74)

/* accent: GOLDEN APRICOT, spent like a spotlight (C2) */
--gold:         #F2B45F   /* the mark. 1.75:1 on ivory so NEVER text there,
                             but 5.7:1 ON THE STAGE, where it is text */
--gold-pale:    #F5F0E8   /* icon beds. NEUTRAL, so icons are not apricot objects */
--gold-wash:    #FDF0DC   /* the ONE apricot SURFACE: toolkit lead, recap price box */
--gold-mid:     #E0A44F   /* hairlines and rules ONLY. 2.0:1, never a numeral */
--gold-deep:    #A96F17   /* headline highlight on light. 4.0:1 -> LARGE TEXT ONLY */
--gold-ink:     #8F5B0D   /* small text and eyebrows.     5.5:1 -> safe at 11px */
--cta-gold:     #F2B45F   /* CTA fill ON THE STAGE, plum label at 5.7:1 */

/* the CTA: SUNRISE CORAL. The warmest object on the page, and the one you press */
--coral:        #E96F55   /* the CTA fill on ivory, and the live dot */
--coral-bed:    #FDEBE5
--coral-ink:    #B93B23   /* coral as TEXT. 5.4:1 ivory, 4.9:1 blush, 4.9:1 own bed */

/* dusty rose: ships as its WASH only, as the fourth icon bed */
--rose-bed:     #F7E6E1

/* rules */
--line:         #EFE3D8
--line-strong:  #E0CDBC
```

**The rule that governs the whole palette: a colour warm enough to feel like
sunrise is never dark enough to be text.** So each accent carries a SURFACE
tone and a separate INK tone, and they are not interchangeable. Apricot is
1.75:1 on ivory and coral is 2.92:1, so neither can ever be a label on the
light page; `--gold-ink` and `--coral-ink` exist for exactly that, and reaching
for the surface tone instead is how a page ends up with an illegible eyebrow.

**ONE button, everywhere, no variants.** Every CTA in the funnel is the same
object: **golden apricot** fill, espresso label, a `--gold-deep` rim. All eight
of them, across the landing page and the checkout. There used to be three
appearances (coral on ivory, apricot on the stage, ivory on a dark card) and the
result was that whichever one was rarest read as a mistake rather than as the
CTA. A reader should recognise the button instantly the fifth time they scroll
past it, and that only works if it never changes colour. `PrimaryCTA` has no
`tone` prop at all now, so a second appearance cannot be reintroduced.

**Apricot, not coral, and it was tested both ways on the live page.** Coral was
tried as the CTA and rejected on sight. The numbers agree with the eye: on the
plum stage apricot is 5.73:1 against coral's 3.43:1, and on ivory a coral button
reads as an alert rather than an invitation, which is the wrong register for a
7 AM stillness practice. Warm does not have to mean loud.

**The rim is structural, not decoration.** Apricot is only 1.75:1 on ivory, far
under the 3:1 WCAG 1.4.11 wants for a UI boundary, so without a rim the button
has no edge at all on the light page. `--gold-deep` is 4.04:1 and carries it,
while sitting 2.4:1 against its own fill so it reads as a rim rather than an
outline. On the plum stage the fill is 5.73:1 and the rim recedes to 1.83:1: it
stops working exactly where it stops being needed.

**Coral is the spark, and scarcity is the point.** It survives on the live pulse
dots, `--coral-bed` as one of the four icon beds, and `--coral-ink` for small
labels on it. Nothing large, nothing you click. A single pulsing dot reads as
intentional; a single coral button among seven apricot ones reads as a bug,
which is exactly what happened when it was tried.

**The lit price (`.kz-lit`) is burnished gold**, same family as the button, so
the number you pay matches the thing you press. Its ramp starts at `#B87C1E`
rather than at the apricot: gradient-clipped text is judged at its lightest
stop, and `#E0A44F` is 2.09:1 on ivory, which was under even the 3:1 large-text
bar those 46 to 56px numbers get. It was failing before this pass.

**The CTA label is espresso, not white.** White on Sunrise Coral is 3.06:1 and
fails outright. Espresso is 4.77:1, and a deep-brown label on a sunrise fill is
also the better-looking of the two: the failure was the reason and the look was
the reward, in that order.

**Dusty Rose ships as its wash.** At full strength (#DDA49B) it is a 2:1
surface that can carry espresso and nothing else, and it is a warm mid-tone
sitting a few degrees from Sunrise Coral, so the two compete at the exact
moment the CTA has to win. As `--rose-bed` it does the job the brief asks of
it, a subtle card ground, without spending any of the coral's authority.

**Three copies of one palette, and they move together:** `app/globals.css`
(`:root`), `app/_landing/shared.tsx` (`C`), and `tailwind.config.ts`. Change one
and you have made a bug that shows up on one component.

**Contrast is derived, not eyeballed.** Every value above was computed against
its actual ground before it shipped. `--gold-deep` clears the 3:1 large-text bar
and nothing else, so it is the headline highlight only; anything at label size
uses `--gold-ink`. `--coral-ink` on `--coral-bed` is the tightest pair on the
page at 4.5:1, and the pills that use it are 10px, so it had to clear the bar on
the BED rather than on the canvas.

**The palette lives in three files** and they move together or the hairlines
drift: `app/globals.css` `:root`, `app/_landing/shared.tsx` `C`, and
`tailwind.config.ts` `colors`.

## Type (C1, with one documented exception)
- **display**: **Bricolage Grotesque** (`--font-display`), variable, with width
  and optical-size axes. A humanist grotesque whose slight irregularity reads as
  a person rather than a corporation. Headline presence comes from WIDTH and
  scale, never from piling on weight, because a bold neutral-grotesque stack
  reads cheap at display size. Headlines only, never below headline size. It
  also sets the wordmark while no logo file exists.
  **It ships no italic**: use the weight axis to differentiate, never a
  synthesised oblique.
- **body**: **Inter** (`--font-body`), 17px / 1.65. Shares a grotesque skeleton
  with the display face, so the two sit together without friction while staying
  distinct in temperament.
- **spec voice**: *exception:* tracked uppercase Inter 700, not a mono. A
  monospace reads clinical against a stillness, breathwork and affirmations
  offer; tracked caps do the same spec/label job in the right register.
- **Eyebrows are ALWAYS uppercase**, `0.2em` tracking, `--gold-ink`. A section
  whose source copy supplies no eyebrow runs **without one** rather than with an
  invented label (which is why the results beat has none).

## The wordmark
`app/_landing/brand-mark.tsx` sets "S.T.A.R.T. Right" as **type**, in Bricolage
Grotesque, with "S.T.A.R.T." at 800 and "Right" dropped to 400. No logo has been supplied and a placeholder graphic
would be worse than honest type. It flips to `--gold` on the navy stage and sits
in `--ink` on cream. To swap in the real mark: drop the SVG at
`public/brand/start-right.svg` (plus a light-on-dark variant) and replace the
span with `next/image`. The props already match.

## Section rhythm
`canvas` → `canvas-2` → `canvas`, alternating, with the hero as the single dark
stage at the top and a navy colophon footer at the bottom. Section padding
`clamp(64px, 8vw, 112px)`.

## Signature effects (all live in `app/globals.css`, unchanged)
- **Hero stage atmosphere** (`kz-stage`): two gold radial blooms + one coral
  bloom over a navy floor ramp, plus a faint edge-masked dot grid. Never a flat
  navy fill (C5).
- **The lego entrance**: a piece drops from above, overshoots and clicks into
  its slot, staggered by `--lego-d`, icon tile popping just after. Gated behind
  `.bw-js` so no-JS users and crawlers see everything (C7 fail-open).
- **Scroll-linked day spine** (`tl-*`): the rail fills to `--tl-p` and each day
  node ignites as the fill reaches it. The page's ONE heavy motion moment
  (C2: keep the signature scarce). Here it carries six days.
- **Gold shimmer sweep** on the primary CTA, plus a gold glow breath.
  `cta-breath` belongs to exactly one instance per screen: on this page that is
  the hero offer card's button.
- **Strike-draw + price pop** on the closing recap: the total value draws its
  strike-through on reveal, then the real price pops in lit. Both numbers are
  computed from the ledger rows, never typed.
- **Reduced motion**: every keyframe is disabled and every hidden reveal state
  forced visible.

## What this skin does NOT do
- No emoji as UI. The source copy's ❤️⭐🛡️💯☑️🔒 render as matched-weight
  Phosphor line icons (C11). The ☑️ on the "Does this sound like you?" lines
  renders as a **coral ×**, because those lines are pains, not features.
- No rainbow accent set. Three icon beds only: gold-pale, coral-bed, navy-bed.
- No dark section bands below the hero.
- No placeholder gradients. Art that has not arrived uses `MediaPlaceholder` at
  the real aspect ratio, labelled with what belongs there.

## Two deviations from the locked anatomy, both forced by the copy
1. **Hero gate pill**: the client's gate line is a full sentence ("For Adults
   Ready To Upgrade Themselves…"), not a chip, so the radius softens from
   `rounded-full` to `rounded-[26px]` and the text wraps to a plaque. Every
   token, the border and the live dot are the skin's.
2. **Toolkit total block**: the source carries a "TOTAL REAL VALUE / ALL FOR
   JUST" summation inside the value-stack beat, which `tgo-kaizan` did not have.
   It is rendered as a ruled foot on `--canvas-2`, deliberately quieter than the
   recap, which keeps the gold surface and the strike-draw.
