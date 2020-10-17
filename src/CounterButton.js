import React, { Component } from 'react'

export class CounterButton extends Component {
    constructor(props){
        super(props);
        this.state={counter:1};
        this.counterClick=this.counterClick.bind(this);
    }
 componentDidMount()
 {
     this.setState(state=>({
     counter: state.counter +1
     }));
 }
 counterClick(){
    this.setState(state=>({
        counter: state.counter +1
        })); 
 }
    render() {
        return (
            <div>
                <button onClick={this.counterClick} > Count: {this.state.counter}</button>
                {this.state.counter}
            </div>
        )
    }
}

export default CounterButton

