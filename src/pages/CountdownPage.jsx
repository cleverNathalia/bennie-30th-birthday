import { useState, useEffect } from 'react'
import { CartridgeSlot } from '../components/CartridgeSlot'
import { calculateSlotData, getTimeToBirthday, getNextCartridgeTime } from '../utils/countdownUtils'
import DoorModal from '../components/DoorModal'
import '../tokens/colors.css'
import '../tokens/materials.css'
import '../tokens/typography.css'
import '../tokens/spacing.css'
import '../tokens/motion.css'
import './CountdownPage.css'

const TEST_MODE = new URLSearchParams(window.location.search).get('test') === 'true'

export default function CountdownPage({ contentData }) {
  const [slots, setSlots] = useState([])
  const [clearedCount, setClearedCount] = useState(0)
  const [selectedDoor, setSelectedDoor] = useState(null)
  const [timeToBirthday, setTimeToBirthday] = useState('...')
  const [nextCartridgeTime, setNextCartridgeTime] = useState('...')

  // Update countdown every second
  useEffect(() => {
    const updateCountdowns = () => {
      const { slots: newSlots, clearedCount: newCount } = calculateSlotData(contentData, TEST_MODE)
      setSlots(newSlots)
      setClearedCount(newCount)
      setTimeToBirthday(getTimeToBirthday(contentData))
      setNextCartridgeTime(getNextCartridgeTime(newSlots))
    }

    updateCountdowns()
    const interval = setInterval(updateCountdowns, 1000)
    return () => clearInterval(interval)
  }, [contentData])

  const handleSlotClick = (index) => {
    if (slots[index]?.state !== 'locked') {
      setSelectedDoor(index)
    }
  }

  return (
    <div className="arcade-cabinet">
      {/* CRT Vignette overlay */}
      <div className="crt-vignette" />

      <div className="cabinet-content">
        {/* Marquee Header */}
        <div className="marquee">
          <div className="marquee-backlight" />

          <div className="marquee-inner">
            <div className="marquee-header">
              <span>Cabinet No. 30</span>
              <span>Dublin · 18:00 daily</span>
            </div>

            <h1 className="marquee-title">
              PLAYER ONE
              <br />
              TURNS THIRTY
            </h1>

            <p className="marquee-subtitle">Eight cartridges · one unlocks a day</p>
          </div>

          <div className="marquee-underline" />
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-cell">
            <div className="stat-label">Credits unlocked</div>
            <div className="stat-value">{String(clearedCount).padStart(2, '0')} / 08</div>
          </div>
          <div className="stat-cell">
            <div className="stat-label">Next cartridge</div>
            <div className="stat-value">{nextCartridgeTime}</div>
          </div>
          <div className="stat-cell">
            <div className="stat-label">Time to birthday</div>
            <div className="stat-value" style={{ color: 'var(--pink)', textShadow: 'var(--glow-text-pink)' }}>
              {timeToBirthday}
            </div>
          </div>
        </div>

        {/* Cartridge Slots */}
        <div className="slot-rack">
          {slots.map((slot, index) => (
            <CartridgeSlot
              key={slot.day}
              day={slot.day}
              state={slot.state}
              still={slot.still}
              countdown={slot.countdown}
              onOpen={() => handleSlotClick(index)}
            />
          ))}
        </div>

        {/* Control Deck */}
        <div className="control-deck">
          <div className="control-buttons">
            <div className="control-button cyan" />
            <div className="control-button cyan" />
            <div className="control-button pink" />
          </div>
          <div className="control-text">Press start · next cartridge loads at 18:00</div>
        </div>
      </div>

      {selectedDoor !== null && (
        <DoorModal door={contentData.doors[selectedDoor]} doorIndex={selectedDoor} onClose={() => setSelectedDoor(null)} />
      )}
    </div>
  )
}
