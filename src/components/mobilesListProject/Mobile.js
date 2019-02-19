import React, { Component } from 'react'
import './mobile.css'

class Mobile extends Component {
    render() {
    const {id, name, price} = this.props.data
    return (
      <div className="mobile">
        <h2>{name}</h2>
        <h2>{price}</h2>
      </div>
    )
  }
}

export default Mobile;