import { useState, useEffect } from 'react'
import DesignSystem from './pages/DesignSystem'
import CountdownPage from './pages/CountdownPage'
import './App.css'

const DESIGN_SYSTEM_MODE = new URLSearchParams(window.location.search).get('design-system') === 'true'

function App() {
  if (DESIGN_SYSTEM_MODE) {
    return <DesignSystem />
  }

  const [contentData, setContentData] = useState(null)
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!contentData) {
    return <div className="error">Error loading content. Please refresh.</div>
  }

  return <CountdownPage contentData={contentData} />
}

export default App
