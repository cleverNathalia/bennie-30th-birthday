import React from 'react';

/* Page-level CRT treatment: scanline multiply + corner vignette.
   Fixed, non-interactive, sits above everything. One per page. */
export function CRTOverlay({ scanlines = true, vignette = true, flicker = false }) {
  return (
    <>
      {vignette && <div aria-hidden="true" style={{ position: 'fixed', inset: '-10%', pointerEvents: 'none', zIndex: 59, background: 'var(--crt-vignette)' }} />}
      {scanlines && <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 60, background: 'var(--crt-scanlines)', mixBlendMode: 'multiply', animation: flicker ? 'flicker 7s steps(1,end) infinite' : 'none' }} />}
    </>
  );
}
