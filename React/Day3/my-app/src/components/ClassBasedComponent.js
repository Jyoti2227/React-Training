import React from "react";

class ClassBasedComponent extends React.Component{

    constructor(props) {
    super(props);
    this.state ={
        counter:0,
     } ; 
     this.baseState = this.state;  
     this.increment = this.increment.bind(this);
    }

   increment(){
        this.setState({counter:this.state.counter + 1});
   }
   decrement(){
        this.setState({counter:this.state.counter - 1});
   }
   reset(){
        this.setState(this.baseState);
   }
    render(){
        return(
            <>
                <h1>ClassBasedComponent {this.state.counter}</h1>
                <h1>ClassBasedComponent Props {this.props.name}</h1>
                <button onClick={this.increment}> Increment Counter</button>
                <button onClick={this.decrement.bind(this)}>Decrement counter</button>
                <button onClick={() =>this.reset()}>Reset</button>
                
            </>
        )
    }
}

export default ClassBasedComponent;