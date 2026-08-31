/**
 * Cache-buster for artwork under /public.
 *
 * Replacing an image while keeping its filename does NOT get the new artwork
 * in front of anyone. The path is the cache key in three separate places: the
 * visitor's browser, the CDN edge, and Next's image optimizer, which stores the
 * resized and re-encoded copies against the source URL. All three keep serving
 * the old bytes, and the stale copy usually looks correct to whoever replaced
 * the file, because their own browser fetched it fresh. It is a bug that only
 * ever appears on someone else's device.
 *
 * So every replaced asset gets a new URL instead. Bump this ONE value in the
 * same pass as any artwork swap and every reference moves together.
 *
 * v1: nothing in /public yet. The photographs, the testimonial clips and the
 *     screenshot wall are all still unsupplied, so every slot on the landing
 *     page is a MediaPlaceholder or a PendingFrame. Bump to '2' in the same
 *     pass as the first artwork drop, and again on every in-place replacement.
 */
export const ASSET_V = '1';

/** Appends the version to a /public path. Pass through unchanged if there is
 *  nothing to version, so a null slot stays a placeholder. */
export const asset = (path: string) => `${path}?v=${ASSET_V}`;
