import React from "react";

class ClassBasedComponent extends React.Component{

    constructor(props) {
    super(props);
    this.state ={
        name:"Jyotii",
     } ; 
     this.checkBinding = this.checkBinding.bind(this);  
    }

    handleClick(){
        this.setState({
            name:"Bhosale",
        });
    }

    checkBinding(){
        console.log("State name ", this.state.name);
    }
    render(){
        return(
            <>
                <h1>ClassBasedComponent {this.state.name}</h1>
                <h1>ClassBasedComponent Props {this.props.name}</h1>
                <button onClick={() => this.handleClick()}> Change State</button>
                <button onClick={this.checkBinding}> check Binding </button>
            </>
        )
    }
}

export default ClassBasedComponent;