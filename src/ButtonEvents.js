import React, { Component } from 'react'

export class ButtonEvents extends Component {
    constructor(props){
        super(props);
        this.state={islogin:false};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
        this.setState({islogin: !this.state.islogin});
    }
    render() {
        return (
            <div>
    <button onClick={this.handleClick}>{this.state.islogin?'Login':'Logout'}</button>
            </div>
        )
    }
}

export default ButtonEvents
