import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : 0
        }
    }

    incrementCounter(){
        this.setState({
            value : this.state.value + 1
        }, () => {console.log('CallBack Value: ',this.state.value);})
        

        console.log(this.state.value);
        
    }

    decreaseCounter(){
        this.setState({
            value : this.state.value - 1
        })
    }

    render(){
        return (
            <div>
                <p>counter - {this.state.value}</p>
                
                <button onClick = {()=> this.incrementCounter()}>+</button>
                
                <button onClick = {()=> this.decreaseCounter()}>-</button>
            </div>
        )
    }
}

export default Counter;