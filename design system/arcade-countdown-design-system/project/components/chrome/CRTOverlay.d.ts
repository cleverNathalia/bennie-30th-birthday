export interface CRTOverlayProps {
  /** 2px-on/1px-off multiply grid across the viewport. */
  scanlines?: boolean;
  /** Corner darkening — makes a flat page read as curved glass. */
  vignette?: boolean;
  /** Occasional brightness dip, 7s cycle. Off by default; it gets tiring. */
  flicker?: boolean;
}
export declare function CRTOverlay(props: CRTOverlayProps): JSX.Element;
