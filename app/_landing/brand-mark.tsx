/**
 * The S.T.A.R.T. Right wordmark, one definition used by every surface.
 *
 * ⚠️ NO LOGO HAS BEEN SUPPLIED. Rather than ship a placeholder graphic or
 * invent a mark, this is set as TYPE in the page's display face: the brand name
 * exactly as the copy writes it, with "Right" dropped to the light weight so
 * a hinge. It is honest, it scales cleanly, and it is one file to replace.
 *
 * TO GO LIVE with the real mark: drop the client's SVG at
 * public/brand/start-right.svg (plus a light-on-dark variant) and swap the
 * <span> below for next/image. Nothing that calls this component changes: the
 * props (height, onDark, priority) already match an <Image>.
 *
 * On the plum stage the mark flips to apricot; on ivory it is deep plum.
 *
 * Not a link. On this page it would point at itself, and there is no other page
 * a reader mid-decision should be sent to.
 */
import { C } from './shared';

export default function BrandMark({
  height = 40,
  onDark = false,
}: {
  height?: number;
  onDark?: boolean;
  /** Accepted so the call sites match a next/image swap. Unused while the mark
   *  is type rather than a file. */
  priority?: boolean;
}) {
  /* The cap height of the display face is roughly 0.7em, so 0.46 of the slot
     height puts the wordmark on the same optical line an SVG mark would sit
     on. */
  const size = Math.round(height * 0.46);

  return (
    <span
      className="inline-flex items-baseline font-display font-bold "
      style={{
        height,
        lineHeight: `${height}px`,
        fontSize: size,
        letterSpacing: '0.01em',
        color: onDark ? C.gold : C.ink,
      }}
      aria-label="S.T.A.R.T. Right"
      role="img"
    >
      <span aria-hidden style={{ fontWeight: 800 }}>
        S.T.A.R.T.
      </span>
      <span aria-hidden style={{ marginLeft: '0.24em', fontWeight: 400 }}>
        Right
      </span>
    </span>
  );
}
