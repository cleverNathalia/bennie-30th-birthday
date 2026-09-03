import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Door from './components/Door'
import DoorModal from './components/DoorModal'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

const DUBLIN_TZ = 'Europe/Dublin'
const UNLOCK_HOUR = 18
const TEST_MODE = new URLSearchParams(window.location.search).get('test') === 'true'

function App() {
  const [contentData, setContentData] = useState(null)
  const [selectedDoor, setSelectedDoor] = useState(null)
  const [unlockedDoors, setUnlockedDoors] = useState({})
  const [loading, setLoading] = useState(true)

  // Load content
  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then(data => {
        setContentData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading content:', err)
        setLoading(false)
      })
  }, [])

  // Check unlock status
  useEffect(() => {
    if (!contentData) return

    const checkUnlocks = () => {
      const newUnlocked = {}
      contentData.doors.forEach((door, index) => {
        if (TEST_MODE) {
          newUnlocked[index] = true
        } else {
          const dublinTime = new Date().toLocaleString('en-US', { timeZone: DUBLIN_TZ })
          const now = new Date(dublinTime)
          const doorDate = new Date(door.date)
          doorDate.setHours(UNLOCK_HOUR, 0, 0, 0)
          newUnlocked[index] = now >= doorDate
        }
      })
      setUnlockedDoors(newUnlocked)
    }

    checkUnlocks()
    const interval = setInterval(checkUnlocks, 60000)
    return () => clearInterval(interval)
  }, [contentData])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!contentData) {
    return <div className="error">Error loading content. Please refresh.</div>
  }

  return (
    <div className="app">
      <ParticleBackground />
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>✨ For You ✨</h1>
        <p className="subtitle">A surprise for your 30th</p>
      </motion.div>

      <motion.div
        className="doors-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {contentData.doors.map((door, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Door
              door={door}
              index={index}
              isUnlocked={unlockedDoors[index]}
              onClick={() => setSelectedDoor(index)}
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedDoor !== null && (
          <DoorModal
            door={contentData.doors[selectedDoor]}
            doorIndex={selectedDoor}
            onClose={() => setSelectedDoor(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
