import React, { Component } from 'react'
import Mobile from './Mobile';
import mobilesData from  './mobileData';

class MobileList extends Component {
    constructor(props){
        super(props);

        this.state = {
            mobiles : mobilesData
        };
    }
  render() {
      const example = this.state.mobiles.map(item => item.name);
      console.log(example);
    return (
      <div>
        <h2>Hello from MobileList - Parent Component</h2>
        {this.state.mobiles.map(item => (<Mobile key={item.id} data={item} />))}
      </div>
    )
  }
}

export default MobileList