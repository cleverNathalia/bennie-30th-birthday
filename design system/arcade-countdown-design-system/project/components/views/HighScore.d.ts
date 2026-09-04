export interface HighScoreRow {
  /** What that day was. */
  label: string;
  /** The date it landed, or a status word. */
  value: string;
}
export interface HighScoreProps {
  title?: string;
  rows?: HighScoreRow[];
  /** Quiet closing line under the board. */
  footnote?: React.ReactNode;
}
export declare function HighScore(props: HighScoreProps): JSX.Element;
