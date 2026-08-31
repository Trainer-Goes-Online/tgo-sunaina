/**
 * The line items, and the one place they are defined.
 *
 * Titles and values are the source copy's recap table, verbatim. Values are
 * numeric so the summary can sum them and show a real total rather than a
 * hard-coded "worth ₹5,485" string: a typed total can disagree with its own
 * line items, a computed one cannot.
 *
 * These mirror the toolkit section on the landing page exactly. If one changes,
 * both must, or the checkout promises something the page did not.
 */
export const RECAP: { title: string; value: number }[] = [
  { title: '6-Day Live ‘Start Your Morning Right’ Challenge', value: 2500 },
  { title: 'The ‘Say It To Yourself’ Affirmation Guide', value: 497 },
  { title: 'The S.T.A.R.T. Right Scorecard', value: 497 },
  { title: 'The Wind Down Breathwork Track', value: 497 },
  { title: 'The S.T.A.R.T. Right Inner Circle', value: 997 },
  { title: 'The ‘One Good Story’ Collection', value: 497 },
];

export const VALUE_TOTAL = RECAP.reduce((n, r) => n + r.value, 0);

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;
