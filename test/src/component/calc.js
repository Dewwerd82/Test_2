import React, { useState } from 'react';

class Calc extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {summ: 0};
      this.n = this.n + 1;
  
      // Привязка необходима, чтобы сделать this доступным в коллбэке
      this.onIncrease = this.onIncrease.bind(this);
      this.onDecrease = this.onDecrease.bind(this);
      this.onReset = this.onReset.bind(this);
    }
  
    onIncrease(){
      this.setState(prevState => ({
        summ: prevState.summ + 1
      }))
    }
  
    onDecrease(){
      this.setState(prevState => ({
          
        summ: prevState.summ - 1
      }))
    }
  
    onReset(){
        this.setState(prevState => ({
            summ : 0
          }))
        }

    render() {
      return (
        <p>
          <h2>Значение : {this.state.summ}</h2>
          {/* {this.state.summ > 0 && <button onClick={this.onDecrease}>{this.state.summ}</button>} */}
          <button onClick={this.onDecrease}>-</button>
          <button onClick={this.onIncrease}>+</button>
          <button onClick={this.onReset}>Reset</button>
          {/* {this.state.summ > 0 && <span>{this.state.summ}</span>} */}
          <span>{this.n}</span>
        </p>
      );
    }
  }

  export default Calc;