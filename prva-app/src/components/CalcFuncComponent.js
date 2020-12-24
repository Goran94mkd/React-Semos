import React, { useState } from 'react'
import '../styles/CalcFuncComponent.css'

function Calc () {
  const [firstInt, setFirstInt] = useState('')
  const [operation, setOperation] = useState('')
  const [secondInt, setSecondInt] = useState('')
  const [initial, setInitial] = useState(0)
  
  const setFirstInteger = (event) => {
    const firstValue = event.target.value
    setFirstInt(firstValue)
  }

  const setNewOperation = (event) => {
    const secondValue = event.target.value
    setOperation(secondValue)
  }

  const setSecondInteger = (event) => {
    const thirdValue = event.target.value
    setSecondInt(thirdValue)
  }

  const calculate = () => {
    const firstInteger = firstInt
    const mathOperation = operation
    const secondInteger = secondInt
    let result = 0

    if (mathOperation === 'sum') {
      result = Number(firstInteger) + Number(secondInteger)
    } else if (mathOperation === 'diff') {
      result = firstInteger - secondInteger
    } else if (mathOperation === 'product') {
      result = firstInteger * secondInteger
    } else if (mathOperation === 'quotient') {
      result = firstInteger / secondInteger
    } else if (!mathOperation) {
      alert('Operation field can not be empty!')
    }
    setInitial(result)
  }

    return (
      <div>
        <div>
          <input id="input" placeholder='First number' onChange={setFirstInteger} />
        </div>

        <div>
          <input id="input" placeholder='sum/diff/product/quotient' onChange={setNewOperation} />
        </div>

        <div>
          <input id="input" placeholder='Second number' onChange={setSecondInteger} />
        </div>

        <div>
          <button id="button" onClick={calculate}>=</button>
        </div>

        <div>
          Result : <span>{initial}</span>
        </div>
      </div>
    )
  }


export default Calc