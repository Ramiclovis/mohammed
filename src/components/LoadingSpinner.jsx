import React from 'react'
import { RingLoader } from 'react-spinners'

const LoadingSpinner = ({ loading }) => {
  if (!loading) return null

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <RingLoader
          color="#06a2d3"
          loading={loading}
          size={80}
          speedMultiplier={1}
        />
        
      </div>
    </div>
  )
}

export default LoadingSpinner 