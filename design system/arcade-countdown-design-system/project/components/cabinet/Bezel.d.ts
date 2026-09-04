export interface BezelProps {
  /** Adds hover lift, press settle, pointer cursor. */
  interactive?: boolean;
  /** Rims the screen in cyan and adds an outer bloom — "this one is powered". */
  lit?: boolean;
  /** CSS aspect-ratio for the screen well. Default `3/4`. */
  ratio?: string;
  /** Screen contents. Rendered bottom-aligned. */
  children?: React.ReactNode;
  /** Rendered on the plastic, below the screen — number and status. */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Bezel(props: BezelProps): JSX.Element;
