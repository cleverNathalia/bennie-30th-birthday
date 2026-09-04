export interface ReelPhoto {
  url: string;
  /** Uppercase caption burned into the bottom of the screen. */
  caption?: string;
}
export interface PhotoReelProps {
  photos?: ReelPhoto[];
  /** Advances every `interval` ms; pauses on hover. */
  autoplay?: boolean;
  interval?: number;
  /** Screen height in px. */
  height?: number;
}
export declare function PhotoReel(props: PhotoReelProps): JSX.Element | null;
