import React from 'react' 
import './App.css'
import Button from './Button.js'
import Calc from './Calc'
import Counter from './Counter.js'

class App extends React.Component {

  render = () => {
    return (
      <div>
        <h1>Welcome to my first react webpage!</h1>
        <Button greeting='Welcome '/>
        <Counter />
        <Calc />
      </div>
    )
  }
}

export default App