export interface DayViewProps {
  /** 1–8. Used for the default eyebrow. */
  day?: number;
  /** Override the eyebrow, e.g. "Cartridge 03". */
  eyebrow?: React.ReactNode;
  /** Michroma heading. */
  title?: React.ReactNode;
  /** Escape, the pink ✕, and the bottom "back" button all call this. */
  onClose?: () => void;
  children?: React.ReactNode;
}
export declare function DayView(props: DayViewProps): JSX.Element;

export interface DayTextProps { children?: React.ReactNode }
export declare function DayText(props: DayTextProps): JSX.Element;

export interface DayListProps {
  /** Rendered as scoreboard rows with a pink two-digit index. */
  items?: string[];
}
export declare function DayList(props: DayListProps): JSX.Element;

export interface DayScreenProps {
  /** An `<iframe>`, `<video>` or `<img>`. */
  children?: React.ReactNode;
  height?: number;
  caption?: React.ReactNode;
}
export declare function DayScreen(props: DayScreenProps): JSX.Element;
