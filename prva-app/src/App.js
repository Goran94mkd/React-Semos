import React from 'react' 
import './App.css'
// import Button from './Button.js'
// import Calc from './Calc'
// import Counter from './Counter.js'
// import Clock from './Clock.js'
import Toolbar from './components/Toolbar'
import ClockFuncComponent from './components/ClockFuncComponent.js'
import CalcFuncComponent from './components/CalcFuncComponent.js'


const items = [
  // 'Home',
  // 'Books',
  // 'Authors',
  // 'Favourites'
]

class App extends React.Component {

  render = () => {
    return (
      <div>
        {/* <h1>Welcome to my first react webpage!</h1>
        <Button greeting='Welcome '/>
        <Counter />
        <Calc />
        <Clock /> */}
        <Toolbar menuItems={items}/>
        <ClockFuncComponent />
        <CalcFuncComponent />
      </div>
    )
  }
}

export default App