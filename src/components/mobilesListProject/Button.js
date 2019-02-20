import React, { Component } from 'react'

export default class Button extends Component {
  render() {
      const { myData } = this.props
    return (
      <button style={{ backgroundColor:'blue', color:'white', padding:'10px'}} onClick={myData}>
        I'm lower button
      </button>
    )
  }
}
