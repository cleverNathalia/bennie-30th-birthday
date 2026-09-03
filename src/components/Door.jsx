import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Door.css'

const DUBLIN_TZ = 'Europe/Dublin'
const UNLOCK_HOUR = 18

function Door({ door, index, isUnlocked, onClick }) {
  const [countdown, setCountdown] = useState('')
  const [isHovered, setIsHovered] = useState(false)

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

  const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00')
    const options = { weekday: 'short', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const doorVariants = {
    locked: {
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
    },
    unlocked: {
      background: 'white',
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  }

  return (
    <motion.div
      className={`door-card ${isUnlocked ? 'unlocked' : 'locked'}`}
      variants={doorVariants}
      initial={isUnlocked ? 'unlocked' : 'locked'}
      animate={isUnlocked ? 'unlocked' : 'locked'}
      whileHover={isUnlocked ? { y: -8, boxShadow: '0 15px 40px rgba(255, 107, 157, 0.25)' } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={isUnlocked ? onClick : undefined}
      style={{ cursor: isUnlocked ? 'pointer' : 'default' }}
    >
      <motion.div
        className="door-content"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="door-number">Day {door.day}</div>
        <div className="door-date">{formatDate(door.date)}</div>

        {isUnlocked ? (
          <motion.div
            className="door-emoji"
            animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            💝
          </motion.div>
        ) : (
          <motion.div
            className="door-lock"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔒
          </motion.div>
        )}

        {countdown && (
          <motion.div className="countdown" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {countdown}
          </motion.div>
        )}
      </motion.div>

      {isUnlocked && (
        <motion.div
          className="shimmer"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </motion.div>
  )
}

export default Door
