import React from 'react';

/* The joystick-and-buttons strip along the bottom of the cabinet. */
export function ControlDeck({ children, note }) {
  return (
    <div style={{ border: '1px solid var(--edge)', background: 'var(--surface-marquee)', boxShadow: 'var(--mat-deck)', padding: 'var(--s-6) var(--s-7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--s-7)', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-5)' }}>{children}</div>
      {note ? <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-lg)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--phos-dim)' }}>{note}</div> : null}
    </div>
  );
}

/* A physical arcade button. A sphere lit from upper-left, not a flat circle. */
export function ArcadeButton({ tone = 'cyan', size = 28, onClick, label, ...rest }) {
  const [press, setPress] = React.useState(false);
  const pink = tone === 'pink';
  return (
    <button
      type="button" onClick={onClick} aria-label={label}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} onMouseLeave={() => setPress(false)}
      style={{
        width: size, height: size, borderRadius: 'var(--radius-button)', border: 'none', padding: 0,
        background: pink ? 'var(--mat-button-pink)' : 'var(--mat-button-cyan)',
        boxShadow: pink ? 'var(--mat-button-shadow-pink)' : 'var(--mat-button-shadow)',
        cursor: onClick ? 'pointer' : 'default',
        transform: press ? 'translateY(2px) scale(.94)' : 'none',
        transition: 'transform var(--dur-tap) var(--ease-mech)',
      }}
      {...rest}
    />
  );
}

/* The ball-top joystick. Decorative. */
export function Joystick({ size = 34 }) {
  return <div aria-hidden="true" style={{ width: size, height: size, borderRadius: 'var(--radius-button)', background: 'var(--mat-button-pink)', boxShadow: 'var(--mat-button-shadow-pink)' }} />;
}
