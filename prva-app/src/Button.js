
import React from 'react'


class Button extends React.Component {

  constructor (props) {
    super(props)
    
    this.state = {
      name: 'Goran', 
      greeting: 'Welcome', 
    }
  }

  alertMe = () => {
    alert(`${this.props.greeting} ${this.state.name}`)
  }

  changeName = (event) => {
    const value = event.target.value 
    

    
    
    console.log(this.state.name) 

    this.setState({ name: value})
  }


  render = () => { 
    return (
      <div>

        <button
          id='welcome'
          className='test'
          onClick={this.alertMe}
        >
          Greet me!
        </button>

        <input onChange={this.changeName} />

        <div>
          { this.props.greeting }
          { this.state.name }
        </div>
      </div>
    )
  }
}

export default Button