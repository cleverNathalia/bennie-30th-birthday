export interface ControlDeckProps {
  /** `Joystick` and `ArcadeButton` children. */
  children?: React.ReactNode;
  /** Uppercase caption on the right of the deck. */
  note?: React.ReactNode;
}
export declare function ControlDeck(props: ControlDeckProps): JSX.Element;

export interface ArcadeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: 'cyan' | 'pink';
  /** Diameter in px. 28 standard, 34 for the joystick ball. */
  size?: number;
  /** Accessible name — the button has no visible text. */
  label?: string;
}
export declare function ArcadeButton(props: ArcadeButtonProps): JSX.Element;

export interface JoystickProps { size?: number }
export declare function Joystick(props: JoystickProps): JSX.Element;
