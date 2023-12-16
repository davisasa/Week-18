import './App.css';
import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(){
    super()
    this.state = {
      number:0
    }
  }
  handleIncrease = ()=>{
    this.setState({ number: this.state.number + 1 });
  };

  handleDecrease = ()=>{
    this.setState({ number: this.state.number - 1 });
  };


  render() {
    return (
      
      <div >
      
      <h1>ClassCounter</h1>
       <button onClick={this.handleIncrease}>Increase Count</button>
       <button onClick={this.handleDecrease}>Decrease Count</button>

       <h1>
        {this.state.number}
       </h1>
     </div>
    )
  }
}









