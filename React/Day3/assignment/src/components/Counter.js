import React from "react";
import CounterOp from "./CounterOp";

class Counter extends React.Component{

    constructor(props) {
    super(props);
    this.state ={
        counter:0,
     } ; 
      this.baseState = this.state; 
    }

    incrementCounter = (data) =>{
        this.setState({
            counter:this.state.counter+data
        });
    }

    decrementCounter = (data) =>{
        this.setState({
            counter:this.state.counter-data
        });
    }

    resetCounter = (data) => {
        this.setState({
            counter:data
        });
    }
    render(){
        return(<>
            <h2>Counter In Class Component is </h2>  
            <CounterOp incrementCounter = {this.incrementCounter } decrementCounter = {this.decrementCounter}  resetCounter = {this.resetCounter} counter ={this.state.counter}/>  
            <h2> Parent Counter is {this.state.counter}</h2> 
        </>)
    }
}

export default Counter;