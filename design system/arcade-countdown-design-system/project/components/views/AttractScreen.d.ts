/**
 * The arrival screen, before the rack.
 */
export interface AttractScreenProps {
  /** Full-bleed still, held at 50% opacity behind the title. */
  image?: string;
  /** Michroma headline. */
  title?: React.ReactNode;
  /** Small cyan line above the title. */
  subtitle?: React.ReactNode;
  /** Blinking pink prompt. */
  prompt?: string;
  /** Any click or keypress fires this. */
  onStart?: () => void;
}
export declare function AttractScreen(props: AttractScreenProps): JSX.Element;
