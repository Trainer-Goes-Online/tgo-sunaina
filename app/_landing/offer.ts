/**
 * Every date, time, price and destination on the page comes through this file.
 * Nothing below it should ever hard-code one again: when the cohort moves, one
 * edit here moves the announcement bar, the hero, the pills, the schedule
 * heading, the docked bar, the footer and the metadata together.
 */

/**
 * THE price. One number, from one env var, used by the copy, the GA4 event
 * values and the amount Razorpay actually charges. Nothing anywhere else may
 * declare a price: two sources drift, and the drift is invisible until the
 * charge and the label disagree on a live page.
 */
/* `??` does NOT catch an empty string, and .env.example now ships every key
   blank. So a copied-but-unfilled .env.local would give Number('') === 0: a
   page advertising ₹0 and a Razorpay order for zero paise, with nothing
   throwing. Guard on a positive number, not on null. */
const RAW_PRICE = Number(process.env.NEXT_PUBLIC_PRICE_RUPEES);
export const PRICE_RUPEES = Number.isFinite(RAW_PRICE) && RAW_PRICE > 0 ? RAW_PRICE : 497;
export const PRICE_PAISE = PRICE_RUPEES * 100;
export const PRICE = `₹${PRICE_RUPEES.toLocaleString('en-IN')}`;
/** The anchor the announcement bar names. Rising, per the source copy. */
export const PRICE_RISES_TO = '₹1699';
export const START_DATE = '14th September';
export const SESSION_TIMES = '7 AM - 8 AM IST';
/**
 * One batch only on this challenge, so the "with timezone" variant is the same
 * string as SESSION_TIMES. Both exports stay, because the checkout, the
 * thank-you page and the terms all read the TZ one and a single batch today
 * does not mean a single batch on the next cohort.
 */
export const SESSION_TIMES_TZ = '7 AM - 8 AM IST';

/**
 * ⚠️ PLACEHOLDER. DO NOT PUBLISH AS-IS.
 * The source copy carries "#,###+" against "Lives Impacted" in the hero proof
 * strip. A real, evidenceable figure has to replace this before the page goes
 * live; an invented number is not an option. The page renders whatever is here
 * verbatim, so a placeholder left in this constant ships visibly rather than
 * silently.
 */
export const WOMEN_SUPPORTED = '#,###+';
/** The label this project actually uses for the same figure. Same placeholder,
 *  same blocker: fill one and both are filled. */
export const LIVES_IMPACTED = WOMEN_SUPPORTED;

/**
 * The WhatsApp community invite. The thank-you page is built around joining it
 * as the single next step, and on this funnel the group is also a paid
 * deliverable ("The S.T.A.R.T. Right Inner Circle", listed at ₹997 value), so
 * an empty value here is a missing product, not just a missing link.
 *
 * ⚠️ REQUIRED BEFORE LAUNCH. Create the group, take the invite link.
 */
export const WHATSAPP_INVITE = process.env.NEXT_PUBLIC_WHATSAPP_INVITE ?? '';

/** The next click is a payment. Every CTA on the page, including the docked
 *  bar, points here. */
export const CHECKOUT_HREF = '/checkout';

/**
 * The CTA label and its reassurance line, as written in the source copy.
 *
 * The source uses four button labels across the page (Reserve My Spot, Get
 * Instant Access, Start Your 6-Day Morning Reset, Take Action). The repeated
 * one, under the hero and under the recap, is the primary. The other three are
 * exported so the sections that use them read from here rather than typing a
 * price into JSX.
 *
 * The reassurance line is a SINGLE line in the source, used under every button,
 * so CTA_NOTE and CTA_NOTE_HERO are deliberately the same string here.
 */
export const CTA_LABEL = `Start Your 6-Day Morning Reset · ${PRICE}`;
export const CTA_LABEL_INSTANT = `Get Instant Access· ${PRICE}`;
export const CTA_LABEL_ACTION = `Take Action · ${PRICE}`;
export const CTA_LABEL_RESERVE = 'Reserve My Spot';
export const CTA_NOTE = "Full Refund If You Don't Love Day One";
export const CTA_NOTE_HERO = CTA_NOTE;
