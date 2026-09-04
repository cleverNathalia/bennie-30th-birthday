export interface MarqueeProps {
  /** Small uppercase text, far left of the kicker row. */
  kickerLeft?: React.ReactNode;
  /** Small uppercase text, far right. Usually time or location. */
  kickerRight?: React.ReactNode;
  /** The Michroma headline. Use `<br/>` to control the break yourself. */
  title?: React.ReactNode;
  /** Pink uppercase line under the title. */
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Marquee(props: MarqueeProps): JSX.Element;
