import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Door.css'

const DUBLIN_TZ = 'Europe/Dublin'
const UNLOCK_HOUR = 18

function Door({ door, index, isUnlocked, onClick }) {
  const [countdown, setCountdown] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (isUnlocked) return

    const updateCountdown = () => {
      const dublinTime = new Date().toLocaleString('en-US', { timeZone: DUBLIN_TZ })
      const now = new Date(dublinTime)
      const doorDate = new Date(door.date)
      doorDate.setHours(UNLOCK_HOUR, 0, 0, 0)

      const diff = doorDate - now
      if (diff <= 0) {
        setCountdown('')
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      if (hours > 0) {
        setCountdown(`Unlocks in ${hours}h ${minutes}m`)
      } else {
        setCountdown(`Unlocks in ${minutes}m`)
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)
    return () => clearInterval(interval)
  }, [isUnlocked, door.date])

  const handleKeyDown = (e) => {
    if (isUnlocked && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <motion.div
      className={`door-wrapper ${isUnlocked ? 'unlocked' : 'locked'} ${isFocused ? 'focused' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={isUnlocked ? { y: -4 } : {}}
      tabIndex={isUnlocked ? 0 : -1}
      role={isUnlocked ? 'button' : undefined}
      aria-label={isUnlocked ? `Play day ${door.day}` : `Day ${door.day}, locked`}
      onClick={isUnlocked ? onClick : undefined}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* SVG Panel */}
      <svg className="panel-svg" viewBox="0 0 210 270" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`panelGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isUnlocked ? 'rgba(0, 20, 40, 0.9)' : 'rgba(30, 10, 20, 0.95)'} />
            <stop offset="100%" stopColor={isUnlocked ? 'rgba(0, 10, 30, 0.95)' : 'rgba(20, 5, 15, 0.98)'} />
          </linearGradient>
          <filter id={`panelGlow${index}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Panel silhouette with clipped corners */}
        <path
          className={`panel-path ${isUnlocked ? 'unlocked' : 'locked'}`}
          d="M 20 0 L 210 0 L 210 240 L 205 245 L 200 240 L 20 240 L 20 20 L 0 20 L 0 0 Z"
          fill={`url(#panelGradient${index})`}
          stroke={isUnlocked ? '#00f0ff' : '#ff1493'}
          strokeWidth="2"
          filter={`url(#panelGlow${index})`}
        />

        {/* Grid texture */}
        <g className="grid-texture" opacity="0.15">
          {[...Array(27)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 10} x2="210" y2={i * 10} stroke={isUnlocked ? '#00f0ff' : '#ff1493'} strokeWidth="0.5" />
          ))}
          {[...Array(21)].map((_, i) => (
            <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="270" stroke={isUnlocked ? '#00f0ff' : '#ff1493'} strokeWidth="0.5" />
          ))}
        </g>

        {/* Bottom decorative elements */}
        <g className="bottom-details" opacity={isUnlocked ? 1 : 0.5}>
          {/* Diagonal ticks */}
          <line x1="30" y1="250" x2="35" y2="255" stroke="#00f0ff" strokeWidth="1" />
          <line x1="40" y1="250" x2="45" y2="255" stroke="#00f0ff" strokeWidth="1" />
          <line x1="50" y1="250" x2="55" y2="255" stroke="#00f0ff" strokeWidth="1" />

          {/* Angular strip */}
          <polygon points="70,250 90,255 90,260 70,255" fill="none" stroke="#00f0ff" strokeWidth="1" />

          {/* Glowing square indicators */}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={120 + i * 14} y="252" width="8" height="8" fill="none" stroke="#00f0ff" strokeWidth="1" />
          ))}
        </g>
      </svg>

      {/* Content container */}
      <div className="door-content">
        {/* Level badge */}
        <div className="level-badge-container">
          <div className="level-label">LEVEL</div>
          <svg className="level-badge" viewBox="0 0 76 76">
            <defs>
              <filter id={`badgeGlow${index}`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Badge background */}
            <circle cx="38" cy="38" r="32" fill="rgba(0, 20, 40, 0.8)" stroke="none" />

            {/* Outer glow ring - segmented arcs */}
            <g stroke={isUnlocked ? '#00f0ff' : '#ff1493'} strokeWidth="2" fill="none" filter={`url(#badgeGlow${index})`}>
              <circle cx="38" cy="38" r="34" strokeDasharray="8,4" opacity="0.8" />
            </g>

            {/* Inner accent ring */}
            <circle cx="38" cy="38" r="28" fill="none" stroke={isUnlocked ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'} strokeWidth="1" />
          </svg>

          {/* Level number */}
          <div className={`level-number ${isUnlocked ? 'unlocked' : 'locked'}`}>
            {String(door.day).padStart(2, '0')}
          </div>
        </div>

        {/* Center content */}
        <div className="center-content">
          {isUnlocked ? (
            <>
              {/* Play control */}
              <div className="play-container">
                <svg className="play-ring" viewBox="0 0 120 120">
                  <defs>
                    <radialGradient id={`playGlow${index}`} cx="50%" cy="50%">
                      <stop offset="0%" stopColor="rgba(255, 20, 147, 0.4)" />
                      <stop offset="100%" stopColor="rgba(255, 20, 147, 0)" />
                    </radialGradient>
                  </defs>

                  {/* Pink glow background */}
                  <circle cx="60" cy="60" r="55" fill={`url(#playGlow${index})`} />

                  {/* Dashed ring */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,4"
                  />
                </svg>

                {/* Play triangle */}
                <div className="play-triangle">▶</div>
              </div>

              <div className="play-label">play</div>
            </>
          ) : (
            <>
              {/* Locked state */}
              <div className="lock-icon">🔒</div>
              {countdown && <div className="countdown">{countdown}</div>}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Door
