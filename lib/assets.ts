/** Retrofit asset types — shared by nav, retrofit page and the calculator. */
export const ASSET_KEYS = ["Trucks", "Buses", "Vessels", "Generators"] as const;
export type AssetKey = (typeof ASSET_KEYS)[number];

/** Validate a `?asset=` query value; falls back to the first asset. */
export function parseAsset(v?: string | string[]): AssetKey {
  const s = Array.isArray(v) ? v[0] : v;
  return (ASSET_KEYS as readonly string[]).includes(s ?? "") ? (s as AssetKey) : ASSET_KEYS[0];
}
