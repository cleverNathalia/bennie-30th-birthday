import React from 'react'

export function Bezel({ interactive = false, lit = false, ratio = '3/4', hideScanlinesOnHover = false, children, footer, style, ...rest }) {
  const [hover, setHover] = React.useState(false)
  const [press, setPress] = React.useState(false)
  const on = interactive && hover

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        setPress(false)
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        position: 'relative',
        background: 'var(--surface-chassis)',
        border: '1px solid var(--hairline)',
        boxShadow: on ? 'var(--mat-bezel-hover)' : 'var(--mat-bezel)',
        padding: 'var(--bezel-pad) var(--bezel-pad) 13px',
        cursor: interactive ? 'pointer' : 'default',
        transform: press ? `translateY(var(--lift-press)) scale(var(--press-scale))` : on ? 'translateY(var(--lift-hover))' : 'none',
        transition: `transform var(--dur-quick) var(--ease-mech), box-shadow var(--dur-quick) var(--ease-mech)`,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: ratio,
          background: 'var(--surface-screen)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          boxShadow: lit ? 'var(--mat-screen-on)' : 'var(--mat-screen)',
        }}
      >
        {children}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--crt-scanlines-fine)', pointerEvents: 'none', opacity: hideScanlinesOnHover ? 0 : 1, transition: 'opacity var(--dur-quick) var(--ease-mech)' }} />
      </div>
      {footer}
    </div>
  )
}
