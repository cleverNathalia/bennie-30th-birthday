import { Bezel } from './Bezel'

export function CartridgeSlot({ day = 1, state = 'locked', label, still, countdown, onOpen }) {
  const open = state !== 'locked'
  const statusText = label || (state === 'ready' ? 'Ready' : state === 'cleared' ? 'Cleared' : day === 8 ? 'Final' : 'Locked')

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 'var(--s-3)', padding: '0 2px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', color: open ? 'var(--phos-bright)' : 'var(--phos-faint)' }}>
        {String(day).padStart(2, '0')}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-label)',
          letterSpacing: 'var(--ls-label)',
          textTransform: 'uppercase',
          color: open ? 'var(--cyan-55)' : 'var(--pink-50)',
        }}
      >
        {statusText}
      </div>
    </div>
  )

  return (
    <Bezel
      interactive={open}
      lit={open}
      footer={footer}
      role={open ? 'button' : undefined}
      tabIndex={open ? 0 : -1}
      aria-label={open ? `Play day ${day}` : `Day ${day}, locked`}
      onClick={open ? onOpen : undefined}
      onKeyDown={(e) => {
        if (open && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onOpen && onOpen()
        }
      }}
    >
      {open ? (
        <>
          {still ? (
            <img
              src={still}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'saturate(0.8) contrast(1.15) brightness(1.1)',
              }}
            />
          ) : null}
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--scrim-still)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: 'var(--s-3)', display: 'flex', alignItems: 'center', gap: '9px' }}>
            <div
              style={{
                width: 26,
                height: 26,
                border: '1px solid var(--cyan)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--cyan)',
                fontSize: 10,
                boxShadow: 'var(--glow-sm)',
              }}
            >
              ▶
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-label-lg)',
                letterSpacing: 'var(--ls-wide)',
                textTransform: 'uppercase',
                color: 'var(--phos-bright)',
              }}
            >
              {state === 'ready' ? 'New' : 'Play'}
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--s-3)',
            background: 'radial-gradient(circle at 50% 40%, var(--pink-10), transparent 70%)',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              border: '1px solid var(--pink-50)',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--pink)',
              fontSize: 20,
              boxShadow: 'var(--glow-pink-sm), inset 0 0 18px var(--pink-10)',
            }}
          >
            ◼
          </div>
          {countdown ? (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-caption)',
                letterSpacing: '.16em',
                color: 'var(--pink)',
                fontVariantNumeric: 'tabular-nums',
                textShadow: 'var(--glow-text-pink)',
              }}
            >
              {countdown}
            </div>
          ) : null}
        </div>
      )}
    </Bezel>
  )
}
