import { IMAGES, type ImageAsset, type ImageKey } from "./manifest";

export { IMAGES };
export type { ImageAsset, ImageKey };

/** Resolve a registry key to `{ src, alt }`. Safe in server and client code. */
export function getImage(key: ImageKey): ImageAsset {
  return IMAGES[key];
}

export const getImageSrc = (key: ImageKey) => IMAGES[key].src;
