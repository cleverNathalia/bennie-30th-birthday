import React from 'react';

/* Squared-off glyph control — close, previous, next. Not a rounded pill. */
export function GlyphButton({ tone = 'cyan', size = 34, children, onClick, disabled, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const pink = tone === 'pink';
  const c = pink ? 'var(--pink)' : 'var(--cyan)';
  return (
    <button
      type="button" onClick={disabled ? undefined : onClick} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, padding: 0, borderRadius: 'var(--radius-none)',
        border: `1px solid ${hover && !disabled ? 'var(--cyan)' : c}`,
        background: hover && !disabled ? 'var(--cyan-08)' : 'rgba(0,0,0,.55)',
        color: hover && !disabled ? 'var(--cyan)' : c,
        fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1,
        display: 'grid', placeItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .35 : 1,
        boxShadow: disabled ? 'none' : hover ? 'var(--glow-md)' : 'var(--glow-sm)',
        transition: 'all var(--dur-tap) var(--ease-mech)',
      }}
      {...rest}
    >{children}</button>
  );
}
