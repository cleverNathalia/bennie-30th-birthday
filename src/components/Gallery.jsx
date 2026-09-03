import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Gallery.css'

function Gallery({ photos, doorIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [photos.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const currentPhoto = photos[currentIndex]

  return (
    <div className="gallery-container">
      <motion.div
        className="gallery-wrapper"
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={currentPhoto.url} alt="Gallery photo" className="gallery-image" />
      </motion.div>

      {photos.length > 1 && (
        <>
          <motion.button
            className="gallery-btn prev"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ❮
          </motion.button>
          <motion.button
            className="gallery-btn next"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ❯
          </motion.button>

          <div className="gallery-counter">
            <span>{currentIndex + 1}</span> / {photos.length}
          </div>
        </>
      )}

      {currentPhoto.caption && (
        <motion.div
          className="gallery-caption"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {currentPhoto.caption}
        </motion.div>
      )}
    </div>
  )
}

export default Gallery
