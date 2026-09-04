export interface StatusBarProps {
  /** `StatCell` children. */
  children?: React.ReactNode;
  /** Override the column count; defaults to the child count. */
  columns?: number;
}
export declare function StatusBar(props: StatusBarProps): JSX.Element;

export interface StatCellProps {
  /** Tracked-out uppercase caption. */
  label?: React.ReactNode;
  /** Michroma, tabular. Keep it short — a time or a fraction. */
  value?: React.ReactNode;
  /** Pink marks the one value that is counting down to the birthday. */
  tone?: 'cyan' | 'pink';
}
export declare function StatCell(props: StatCellProps): JSX.Element;
