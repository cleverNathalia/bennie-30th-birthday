import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Gallery from './Gallery'
import './DoorModal.css'

function DoorModal({ door, doorIndex, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  }

  return (
    <motion.div
      className="modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          className="close-btn"
          onClick={onClose}
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ✕
        </motion.button>

        <div className="door-number" style={{ marginBottom: '1rem', textAlign: 'center' }}>
          Day {door.day}
        </div>

        {door.text && (
          <motion.div
            className="modal-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {door.text}
          </motion.div>
        )}

        {door.type === 'video' && door.videoLink && (
          <motion.div
            className="modal-video"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <iframe src={door.videoLink} allowFullScreen></iframe>
          </motion.div>
        )}

        {door.type === 'gallery' && door.photos && door.photos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Gallery photos={door.photos} doorIndex={doorIndex} />
          </motion.div>
        )}

        {door.type === 'text' && Array.isArray(door.items) && (
          <motion.div
            className="modal-items-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.05 }}
          >
            {door.items.map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <strong>{i + 1}.</strong> {item}
              </motion.p>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default DoorModal
