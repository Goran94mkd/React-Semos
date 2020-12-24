import React, { useState } from 'react'
import '../styles/Toolbar.css'
import logo from '../images/example-logo.png'

// Main navigation component

let imgStyle = { maxWidth: '5rem', paddingTop: '3px' };
// props is an object
const Toolbar = (props) => {
  const {menuItems} = props
  // STATE HOOK 
  const [counter, setCounter] = useState(0)

  const decrement = () => {
    const newState = counter - 1
    setCounter(newState)
  }
  const increment = () => {
    const newState = counter + 1
    setCounter(newState)
  }

  const emptyMenuItems = () => {
    if(menuItems.length > 1){
      return menuItems.map((element) => (
        <li className="toolbar-item">{element}</li>
      ))
    }else{
      return alert('The MenuItems are empty. Browser can not load the page!')
    }
  }

  emptyMenuItems()

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