/**
 * The S.T.A.R.T. Right lockup, one definition used by every surface.
 *
 * The supplied artwork is a copper gradient on transparency, which is why there
 * is no light-on-dark variant and no `onDark` swap any more: checked against
 * both of the page's grounds, it holds on the plum stage and on ivory. The prop
 * is still accepted so the call sites did not have to change.
 *
 * Sized by HEIGHT, with width following the artwork's own 1.534 ratio, so a
 * call site asks for the height it has room for and never distorts the mark.
 * The source PNG was trimmed to its artwork bounds before conversion, so the
 * height requested is the height rendered rather than height-plus-margin.
 *
 * The tagline under the wordmark is decorative below roughly 200px of lockup
 * height. That is expected: it is a large-format element of the mark, and the
 * wordmark above it is what has to read in a header.
 *
 * The monogram alone lives at /brand/start-right-mark.webp for anywhere the
 * full lockup is too wide, and it is what the favicon is cut from.
 *
 * Not a link. On this page it would point at itself, and there is no other page
 * a reader mid-decision should be sent to.
 */
import { asset } from './asset-version';

/** The artwork's own aspect ratio, measured off the trimmed source. */
const RATIO = 1493 / 973;

export default function BrandMark({
  height = 40,
}: {
  height?: number;
  /** Accepted so the call sites did not change. The copper mark reads on both
   *  grounds, so it no longer selects a variant. */
  onDark?: boolean;
  priority?: boolean;
}) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={asset('/brand/start-right-logo.webp')}
      alt="S.T.A.R.T. Right, your daily dose of strength and stillness"
      height={height}
      width={Math.round(height * RATIO)}
      style={{ height, width: 'auto' }}
      className="block"
    />
  );
}
