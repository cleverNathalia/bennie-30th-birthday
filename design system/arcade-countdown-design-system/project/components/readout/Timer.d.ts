export interface TimerProps {
  /** Live target. Ticks every second, formats as `2D 06:41:12`. */
  target?: string | Date;
  /** Static override for specimens and mocks. */
  value?: string;
  /** `sm` mono caption · `md` Michroma 19px · `lg` Michroma 34px. */
  size?: 'sm' | 'md' | 'lg';
  tone?: 'cyan' | 'pink';
  /** Renders each digit in its own recessed cell, with a blinking colon. */
  segmented?: boolean;
}
export declare function Timer(props: TimerProps): JSX.Element;
