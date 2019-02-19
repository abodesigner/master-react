import React , { Component } from 'react';

class Welcome extends Component {
    render(){
        const {name, children} = this.props;
        //const {state1, state2} = this.state;
        return (
            <div>
                <h1>The car name is, {name}</h1>
                <p>{children}</p>
            </div>
        )
    }
}

export default Welcome;