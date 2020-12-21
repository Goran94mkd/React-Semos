import React from 'react'
import './Calc.css'

class Calc extends React.Component {

  constructor() {
    super()

    this.state = {
      firstInt: '',
      operation: '',
      secondInt: '',
      initial: 0
    }
  }

  setFirstInt = (event) => {
    const firstValue = event.target.value
    this.setState({ firstInt: firstValue })
  }

  setOperation = (event) => {
    const secondValue = event.target.value
    this.setState({ operation: secondValue })
  }

  setSecondInt = (event) => {
    const thirdValue = event.target.value
    this.setState({ secondInt: thirdValue })
  }

  calculate = () => {
    const firstInteger = this.state.firstInt
    const mathOperation = this.state.operation
    const secondInteger = this.state.secondInt
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
    this.setState({ initial: result })
  }


  render = () => {
    return (
      <div>
        <div>
          <input id="input" placeholder='First number' onChange={this.setFirstInt} />
        </div>

        <div>
          <input id="input" placeholder='sum/diff/product/quotient' onChange={this.setOperation} />
        </div>

        <div>
          <input id="input" placeholder='Second number' onChange={this.setSecondInt} />
        </div>

        <div>
          <button id="button" onClick={this.calculate}>=</button>
        </div>

        <div>
          Result : <span>{this.state.initial}</span>
        </div>
      </div>
    )
  }
}
export default Calc