import React, { Component } from 'react'
import './mobile.css'
import Button from './Button'
class Mobile extends Component {

  constructor(props){
    super(props);
    this.state = {
      count : 0,
      name : 'ayman'
    }

    // first way => bind
    //this.handleClick = this.handleClick.bind(this);
  }


  //handleClick(){
    // console.log('you clicked me');
    // console.log(this.state.count);

    // this keyword has a special context in JS
    // the handleClick method didn't bind automatically with class
    // the method doesn't know what [this.state.count]... to solve this yu should bind event with state

  //}

  // the second way => use arrow function
  handleAddClick = () => {
    this.setState({
      count: this.state.count + 1,
      name : 'adel'
    })
  }

  handleMinusClick = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleResetClick = () => {
    this.setState({
      count : 0
    })
  }

  render() {
    const {name, price, img} = this.props.data
    const { child } = this.props;
    console.log(child)
    return (
      <div className="mobile">
        <img src={img}/>
        <h2>{name}</h2>
        <h2>{price}</h2>
        <button onClick={this.handleAddClick}>Add Count</button>
        <button onClick={this.handleMinusClick}>Minus Count</button>
        <button onClick={this.handleResetClick}>Reset Count</button>
        <h2>count : {this.state.count}</h2>
        <Button myData = { child }/>
        {/* <button onClick={ child }>I'm from parent container</button> */}
      </div>
    )
  }
}

export default Mobile;