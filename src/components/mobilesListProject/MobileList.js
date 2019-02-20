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

    handleClick = () => console.log('info from mobileslist');

  render() {
      // const example = this.state.mobiles.map(item => item.name);
      // console.log(example);
    return (
      <div style={{padding:'1rem'}}>
        <h2>Hello from MobileList - Parent Component</h2>
        {this.state.mobiles.map(item => (
        <Mobile key={item.id} data={item} child={this.handleClick} />
        ))}

        {/* <button onClick={this.handleClick}>click me</button> */}
      </div>
    )
  }
}

export default MobileList