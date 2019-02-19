import React, { Component } from 'react'

class EventBinding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message : 'Hello'
    }

    //this.clickHandler = this.clickHandler.bind(this);
  }
  
//   clickHandler(){
//       this.setState({
//           message: 'good bye'
//       })
//     }

clickHandler = () => {
    this.setState({
        message:'goodbye!'
    })
}
   
    /**
     * undefined so we must use event binding.
     * First Option : use binding in the render method. [not recommened becuase of performane implication]
     * Second Option: use arrow function in the render method. [not recommened becuase of performane implication]
     * Third Option : use binding in the clalss constructor [recommende by React].
     * Forth Option : use arrow function as class property. [recommende by React].
     * */

    render() {
    return (
      <div>
        <p>{this.state.message}</p>  
        {/* <button onClick={this.clickHandler.bind(this)}>GoggBye</button> */}
        {/* <button onClick={() => this.clickHandler()}>GoggBye</button> */}
        <button onClick={this.clickHandler}>GoggBye</button>
      </div>
    )
  }
}

export default EventBinding
