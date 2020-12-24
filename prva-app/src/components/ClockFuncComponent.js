import React, { useState } from 'react'
import '../styles/ClockFuncComponent.css'

function Clock () {
  const currentTime = new Date().toLocaleTimeString()
  const [time, setTheTime] = useState(currentTime)

  setInterval(() =>
    timeSkopje(), 1000)

  const timeSkopje = () => {
    const newTime = new Date().toLocaleTimeString()
    setTheTime(newTime)
  }

  return (
    <div id="divClock">
      <h2 id="h2">Current Local Time</h2>
      <h2 id="h2">Skopje, Macedonia</h2>
      <h1 id="h1">
        {time}
      </h1>
    </div>
  )
}

export default Clock