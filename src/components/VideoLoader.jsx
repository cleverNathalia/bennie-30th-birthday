import { motion } from 'framer-motion'
import './VideoLoader.css'

function VideoLoader() {
  return (
    <div className="video-loader-container">
      <motion.div
        className="loader-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading your surprise...
      </motion.div>
      <motion.div
        className="loader-dots"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ✨
      </motion.div>
    </div>
  )
}

export default VideoLoader
