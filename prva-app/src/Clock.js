import React from 'react'
import './Clock.css'

class Clock extends React.Component {
  constructor() {
    super()

    this.state={
      time: new Date()
    }

    setInterval(()=>
      this.currentTime(),1000)
  }

  currentTime = () => {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div id="divClock">
        <h2 id="h2">Current Local Time</h2>
        <h2 id="h2">Skopje, Macedonia</h2>
        <h1 id="h1">
          {this.state.time.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

export default Clock;