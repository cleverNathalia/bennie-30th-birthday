export interface GlyphButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Pink is reserved for dismiss. Everything else is cyan. */
  tone?: 'cyan' | 'pink';
  /** Square side in px. */
  size?: number;
  /** A single glyph — ✕ ❮ ❯ ⏸. Never a word. */
  children?: React.ReactNode;
  disabled?: boolean;
}
export declare function GlyphButton(props: GlyphButtonProps): JSX.Element;
