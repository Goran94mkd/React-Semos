import React, { useState, useEffect } from 'react'
import '../styles/Toolbar.css'
import logo from '../images/example-logo.png'

// Main navigation component

let imgStyle = { maxWidth: '5rem', paddingTop: '3px' };
// props is an object
const Toolbar = (props) => {
  const {menuItems} = props
  // STATE HOOK 
  const [counter, setCounter] = useState(0)

  if(!props.warn) {
    alert('menuItems is empty. Browser can not load the page')
  }

  const decrement = () => {
    const newState = counter - 1
    setCounter(newState)
  }
  const increment = () => {
    const newState = counter + 1
    setCounter(newState)
  }
  useEffect(() => {
    alert('The menu items are empty!')
  }, [menuItems])

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <ul className='toolbar-list'>
        <li>
          <img alt='placeholderImage' src={logo} style={imgStyle} />
        </li>
        {props.menuItems.map(element => <li className='toolbar-item'>
          {element}
        </li>
        )}
      </ul>
    </div>
  )
}
export default Toolbar