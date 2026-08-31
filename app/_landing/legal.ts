/**
 * The business facts every legal page needs.
 *
 * ⚠️ PLACEHOLDERS. Razorpay will not approve a live account against these, and
 * a policy naming the wrong entity is worse than no policy. Every value marked
 * TODO must be replaced with what is actually registered before this funnel
 * takes money. They are collected here rather than scattered through three
 * pages so it is one edit, and so a placeholder cannot hide in a paragraph.
 *
 * They render on the page as written, so an unfilled one is visible to anyone
 * who opens the privacy policy rather than buried in a file nobody reads.
 *
 * `entity` and `tradeName` are TWO fields, not one, and both are needed before
 * the pages read correctly. Most of these clients are sole proprietorships,
 * which have no separate legal person: the individual IS the entity and is
 * what appears on the PAN and GST record, while the business name is what the
 * buyer recognises. The law wants the person named; the page wants the brand.
 * Collapsing them into one field gets one of the two audiences wrong, so ask
 * which structure the business actually is before filling either.
 */
export const LEGAL = {
  /** TODO: the registered entity, exactly as it appears on the GST / PAN
   *  record. For a sole proprietorship this is the PROPRIETOR'S OWN NAME
   *  (likely "Sunaina Setia"), not the brand. Confirm the structure first. */
  entity: '[TODO: registered entity / proprietor name]',
  /** TODO: the registered trading name, used wherever the law wants
   *  "trading as". This is the business name, which may or may not be
   *  "S.T.A.R.T. Right". */
  tradeName: '[TODO: registered trading name]',
  /** TODO: registered address, including PIN. */
  address: '[TODO: registered address]',
  /** TODO: a reachable phone number. Razorpay's merchant review looks for the
   *  registered name, a postal address and a working phone plus email on the
   *  site itself, not only inside a policy page. */
  phone: '[TODO: contact phone]',
  /** TODO: the same number, digits and leading + only, for the tel: href.
   *  e.g. +919876543210 */
  phoneHref: '',
  /** TODO: the inbox that is actually monitored. Refund requests and data
   *  requests both land here. */
  email: '[TODO: support@ email]',
  /** TODO: the seat of the district court covering the registered address.
   *  Worth confirming rather than inferring: the client may prefer a specific
   *  forum. */
  jurisdiction: '[TODO: city]',
  /** TODO: the date these were published. */
  effectiveDate: '[TODO: date]',
  brand: 'S.T.A.R.T. Right',
  product: '6-Day ‘Start Your Morning Right’ Challenge',
} as const;
