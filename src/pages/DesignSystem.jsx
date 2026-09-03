import { useState } from 'react'
import { motion } from 'framer-motion'
import '../pages/DesignSystem.css'

function DesignSystem() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'components', label: 'Components' },
    { id: 'interactions', label: 'Interactions' },
    { id: 'states', label: 'States' },
  ]

  return (
    <div className="design-system">
      <motion.header className="ds-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>🎮 Bennie's 30th — Design System</h1>
        <p className="ds-subtitle">Sci-fi Arcade Birthday Countdown</p>
      </motion.header>

      <nav className="ds-nav">
        {sections.map((section, i) => (
          <button
            key={section.id}
            className={`nav-item ${activeSectionIndex === i ? 'active' : ''}`}
            onClick={() => setActiveSectionIndex(i)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <motion.main
        className="ds-content"
        key={activeSectionIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeSectionIndex === 0 && <OverviewSection />}
        {activeSectionIndex === 1 && <ColorsSection />}
        {activeSectionIndex === 2 && <TypographySection />}
        {activeSectionIndex === 3 && <ComponentsSection />}
        {activeSectionIndex === 4 && <InteractionsSection />}
        {activeSectionIndex === 5 && <StatesSection />}
      </motion.main>

      <footer className="ds-footer">
        <p>Design System v1.0 • Arcade Sci-Fi Neon Aesthetic</p>
      </footer>
    </div>
  )
}

function OverviewSection() {
  return (
    <section className="ds-section">
      <h2>Overview</h2>
      <div className="overview-content">
        <div className="overview-block">
          <h3>Purpose</h3>
          <p>A personal, intimate countdown experience celebrating Bennie's 30th birthday. Eight arcade-style "doors" unlock daily, each revealing a surprise from his wife Danielle.</p>
        </div>

        <div className="overview-block">
          <h3>Vibe</h3>
          <p>Sci-fi arcade gaming UI meets romantic personal gift. Dark, immersive environment with neon-soaked cyberpunk energy and high-tech HUD aesthetics.</p>
        </div>

        <div className="overview-block">
          <h3>Key Values</h3>
          <ul>
            <li>🎮 Gaming-forward, technical aesthetic</li>
            <li>💝 Emotionally resonant and personal</li>
            <li>⌚ Precise, time-based interactions</li>
            <li>♿ Accessible and keyboard-navigable</li>
            <li>🌙 Dark-mode only, immersive</li>
          </ul>
        </div>

        <div className="overview-block">
          <h3>Design Principles</h3>
          <ul>
            <li><strong>Angular geometry:</strong> Square panels, clipped corners, beveled edges</li>
            <li><strong>Neon glow:</strong> All text and interactive elements glow with soft drop-shadows</li>
            <li><strong>High contrast:</strong> Bright neon against nearly-black backgrounds</li>
            <li><strong>Technical details:</strong> SVG grid textures, decorative elements, monospace typography</li>
            <li><strong>Smooth interactions:</strong> Glowing hover states, animated unlocks, respects reduced-motion</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function ColorsSection() {
  const colors = [
    { name: 'Neon Cyan', hex: '#00F0FF', role: 'Primary accent, borders, glow' },
    { name: 'Neon Magenta', hex: '#FF1493', role: 'Highlights, unlocked state, countdowns' },
    { name: 'Dark Background', hex: '#0A0E27', role: 'Main background' },
    { name: 'Panel Dark', hex: '#0C1428', role: 'Card/modal backgrounds' },
    { name: 'White', hex: '#FFFFFF', role: 'Play controls, icons' },
  ]

  return (
    <section className="ds-section">
      <h2>Color Palette</h2>
      <div className="colors-grid">
        {colors.map((color) => (
          <div key={color.hex} className="color-card">
            <div
              className="color-swatch"
              style={{ backgroundColor: color.hex }}
            />
            <h3>{color.name}</h3>
            <code>{color.hex}</code>
            <p>{color.role}</p>
          </div>
        ))}
      </div>

      <div className="color-combos">
        <h3>Color Combinations</h3>
        <div className="combo-row">
          <div className="combo-box" style={{ background: '#0A0E27', border: '2px solid #00f0ff' }}>
            <span style={{ color: '#00f0ff', textShadow: '0 0 10px #00f0ff' }}>Cyan on Dark</span>
          </div>
          <div className="combo-box" style={{ background: '#0A0E27', border: '2px solid #ff1493' }}>
            <span style={{ color: '#ff1493', textShadow: '0 0 10px #ff1493' }}>Magenta on Dark</span>
          </div>
          <div className="combo-box" style={{ background: '#0A0E27', border: '2px solid #00f0ff' }}>
            <span style={{ color: 'white', textShadow: '0 0 10px #00f0ff' }}>White + Cyan Glow</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TypographySection() {
  return (
    <section className="ds-section">
      <h2>Typography</h2>

      <div className="typography-block">
        <h3>Primary Font</h3>
        <p style={{ fontFamily: "'Courier New', monospace" }}>
          Courier New (Monospace) – Technical, arcade-like aesthetic
        </p>
      </div>

      <div className="typography-block">
        <h3>Heading Styles</h3>
        <div className="typo-examples">
          <div>
            <h1 className="typo-h1">Page Title</h1>
            <small>2.5rem, 900 weight, 3px letter-spacing, all-caps</small>
          </div>
          <div>
            <h2 className="typo-h2">Section Heading</h2>
            <small>2rem, 700 weight, 2px letter-spacing</small>
          </div>
          <div>
            <h3 className="typo-h3">Subsection</h3>
            <small>1.4rem, 700 weight, 1px letter-spacing</small>
          </div>
        </div>
      </div>

      <div className="typography-block">
        <h3>Text Styles</h3>
        <div className="typo-examples">
          <div>
            <p className="typo-body">Body text: Standard paragraph copy with 1.6 line-height</p>
            <small>1rem, 400 weight, cyan with subtle glow</small>
          </div>
          <div>
            <p className="typo-label">Label / UI Text</p>
            <small>0.8rem, 600 weight, all-caps, cyan glow</small>
          </div>
          <div>
            <p className="typo-countdown">Countdown Timer</p>
            <small>0.8rem, 600 weight, magenta with pulse</small>
          </div>
          <div>
            <p className="typo-code">// Code / Technical</p>
            <small>0.85rem, monospace, cyan</small>
          </div>
        </div>
      </div>

      <div className="typography-block">
        <h3>Text Effects</h3>
        <div className="effects-row">
          <span style={{ color: '#00f0ff', textShadow: '0 0 10px #00f0ff' }}>Cyan Glow</span>
          <span style={{ color: '#ff1493', textShadow: '0 0 10px #ff1493' }}>Magenta Glow</span>
          <span style={{ color: 'white', textShadow: '0 0 10px #00f0ff, 0 0 20px #ff1493' }}>Dual Glow</span>
        </div>
      </div>
    </section>
  )
}

function ComponentsSection() {
  return (
    <section className="ds-section">
      <h2>Components</h2>

      <div className="component-group">
        <h3>Arcade Door Card (Unlocked)</h3>
        <div className="component-preview">
          <svg className="mini-panel" viewBox="0 0 150 180">
            <defs>
              <linearGradient id="miniGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 20, 40, 0.9)" />
                <stop offset="100%" stopColor="rgba(0, 10, 30, 0.95)" />
              </linearGradient>
            </defs>
            <path
              d="M 15 0 L 150 0 L 150 160 L 145 165 L 140 160 L 15 160 L 15 15 L 0 15 L 0 0 Z"
              fill="url(#miniGrad)"
              stroke="#00f0ff"
              strokeWidth="1.5"
            />
            <circle cx="120" cy="20" r="18" fill="none" stroke="#00f0ff" strokeWidth="1" />
            <text x="120" y="25" fontSize="8" fill="white" textAnchor="middle">
              01
            </text>
            <circle cx="75" cy="80" r="30" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="75" y="88" fontSize="20" fill="white" textAnchor="middle">
              ▶
            </text>
            <text x="75" y="130" fontSize="6" fill="white" textAnchor="middle">
              play
            </text>
          </svg>
        </div>
        <p><strong>Unlocked State:</strong> Cyan borders, bright glow, interactive play button</p>
      </div>

      <div className="component-group">
        <h3>Arcade Door Card (Locked)</h3>
        <div className="component-preview">
          <svg className="mini-panel locked" viewBox="0 0 150 180">
            <defs>
              <linearGradient id="miniGradLocked" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(30, 10, 20, 0.9)" />
                <stop offset="100%" stopColor="rgba(20, 5, 15, 0.95)" />
              </linearGradient>
            </defs>
            <path
              d="M 15 0 L 150 0 L 150 160 L 145 165 L 140 160 L 15 160 L 15 15 L 0 15 L 0 0 Z"
              fill="url(#miniGradLocked)"
              stroke="#ff1493"
              strokeWidth="1.5"
              opacity="0.7"
            />
            <circle cx="120" cy="20" r="18" fill="none" stroke="#ff1493" strokeWidth="1" />
            <text x="120" y="25" fontSize="8" fill="white" opacity="0.7">
              02
            </text>
            <text x="75" y="95" fontSize="24" textAnchor="middle">
              🔒
            </text>
            <text x="75" y="130" fontSize="5" fill="#ff1493" textAnchor="middle" textShadow="0 0 8px #ff1493">
              Unlocks in 12h
            </text>
          </svg>
        </div>
        <p><strong>Locked State:</strong> Magenta borders, dimmed appearance, padlock icon, countdown</p>
      </div>

      <div className="component-group">
        <h3>Modal / Popover</h3>
        <div className="component-preview modal-preview">
          <div
            className="mini-modal"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(20, 24, 50, 0.95) 100%)',
              border: '2px solid rgba(0, 240, 255, 0.6)',
              borderRadius: '0',
              padding: '1.5rem',
              maxWidth: '300px',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.5)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', color: '#00f0ff', textShadow: '0 0 8px #00f0ff', letterSpacing: '2px', textTransform: 'uppercase' }}>Day 01</span>
            </div>
            <div style={{ color: '#00f0ff', textShadow: '0 0 5px #00f0ff', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Content appears here: videos, text, photos, or interactive elements.
            </div>
            <button
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: '2px solid #ff1493',
                color: '#ff1493',
                fontSize: '1rem',
                cursor: 'pointer',
                padding: '0.5rem',
                boxShadow: '0 0 10px #ff1493',
              }}
            >
              ✕
            </button>
          </div>
        </div>
        <p><strong>Modal Component:</strong> Dark gradient background, cyan borders with glow, positioned over backdrop blur</p>
      </div>

      <div className="component-group">
        <h3>Badge</h3>
        <div className="component-preview">
          <svg className="mini-badge" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="20" fill="rgba(0, 20, 40, 0.8)" />
            <circle cx="30" cy="30" r="22" fill="none" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="30" y="35" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">
              04
            </text>
          </svg>
        </div>
        <p><strong>Level Badge:</strong> Circular, segmented ring, overlaps card corner</p>
      </div>
    </section>
  )
}

function InteractionsSection() {
  return (
    <section className="ds-section">
      <h2>Interactions & Animations</h2>

      <div className="interaction-block">
        <h3>Hover States</h3>
        <div className="interaction-example">
          <div className="hover-demo" style={{ border: '2px solid #00f0ff', padding: '1rem' }}>
            <p style={{ color: '#00f0ff', textShadow: '0 0 10px #00f0ff' }}>Unlocked card on hover:</p>
            <ul style={{ color: '#00f0ff', fontSize: '0.9rem' }}>
              <li>Cyan outline intensifies glow</li>
              <li>Play button and pink glow brighten</li>
              <li>Subtle upward movement (y: -4px)</li>
              <li>Transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="interaction-block">
        <h3>Focus States</h3>
        <div className="interaction-example">
          <div className="focus-demo" style={{ outline: '3px solid rgba(0, 240, 255, 0.8)', outlineOffset: '4px', padding: '1rem' }}>
            <p style={{ color: '#00f0ff' }}>Keyboard focus:</p>
            <ul style={{ color: '#00f0ff', fontSize: '0.9rem' }}>
              <li>Bright cyan outline (3px solid)</li>
              <li>4px offset from element</li>
              <li>Visible on all interactive elements</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="interaction-block">
        <h3>Active States</h3>
        <p style={{ color: '#00f0ff' }}>Card pressed: scale(0.98) + smooth press feedback</p>
        <p style={{ color: '#00f0ff' }}>Modal opens: opacity fade + spring scale animation (y from +50px)</p>
        <p style={{ color: '#00f0ff' }}>Countdown pulses: text-shadow intensifies every 1s</p>
      </div>

      <div className="interaction-block">
        <h3>Accessibility</h3>
        <ul style={{ color: '#00f0ff' }}>
          <li>Respects <code>prefers-reduced-motion</code> media query</li>
          <li>Keyboard navigation: Tab through cards, Enter/Space to open</li>
          <li>ARIA labels on all interactive elements</li>
          <li>High contrast text and focus indicators</li>
        </ul>
      </div>
    </section>
  )
}

function StatesSection() {
  return (
    <section className="ds-section">
      <h2>Component States</h2>

      <div className="states-grid">
        <div className="state-card">
          <h3>Door: Unlocked</h3>
          <div style={{ background: '#0A0E27', padding: '1.5rem', border: '2px solid #00f0ff' }}>
            <p style={{ color: '#00f0ff', textShadow: '0 0 10px #00f0ff', marginBottom: '1rem' }}>Day 01</p>
            <p style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>▶</p>
            <p style={{ color: 'white', textShadow: '0 0 10px #00f0ff', fontSize: '0.8rem' }}>play</p>
          </div>
          <small>Interactive, clickable, glowing borders</small>
        </div>

        <div className="state-card">
          <h3>Door: Locked</h3>
          <div style={{ background: '#0A0E27', padding: '1.5rem', border: '2px solid #ff1493', opacity: 0.7 }}>
            <p style={{ color: '#ff1493', textShadow: '0 0 8px #ff1493', marginBottom: '1rem' }}>Day 02</p>
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒</p>
            <p style={{ color: '#ff1493', textShadow: '0 0 8px #ff1493', fontSize: '0.7rem' }}>Unlocks in 12h</p>
          </div>
          <small>Non-interactive, dimmed, countdown visible</small>
        </div>

        <div className="state-card">
          <h3>Modal: Open</h3>
          <div style={{ background: 'rgba(10, 14, 39, 0.95)', padding: '1.5rem', border: '2px solid #00f0ff', fontSize: '0.85rem' }}>
            <p style={{ color: '#00f0ff', marginBottom: '0.5rem' }}>Day 01</p>
            <p style={{ color: '#00f0ff', fontSize: '0.75rem', marginBottom: '1rem' }}>Content displays here</p>
            <button
              style={{
                background: 'transparent',
                border: '1px solid #ff1493',
                color: '#ff1493',
                padding: '0.4rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
          <small>Centered, z-index: 9999, keyboard-closeable</small>
        </div>

        <div className="state-card">
          <h3>Loading: Video</h3>
          <div style={{ background: '#0A0E27', padding: '1.5rem', border: '2px solid rgba(0, 240, 255, 0.4)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⌛</div>
            <p style={{ color: '#00f0ff', fontSize: '0.8rem', textShadow: '0 0 8px #00f0ff' }}>Loading your surprise...</p>
            <p style={{ color: '#00f0ff', fontSize: '1.5rem', marginTop: '0.5rem' }}>✨</p>
          </div>
          <small>Spinner + pulsing glow, blocks interaction</small>
        </div>
      </div>
    </section>
  )
}

export default DesignSystem
