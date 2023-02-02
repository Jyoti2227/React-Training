
import React from "react";

class AnimalCC extends React.Component{

    constructor(){
         super();
        this.state = {
            animalList : ['Tiger','Dog','Cat','Deer','Lion'],
        }
    }
    
    render(){
        return(<>
            <h2>Animal Class Component</h2>
             <ul>
                {this.state.animalList.map((item,index) => 
                <li key={index}>{item}
                </li>)}
            </ul>
        </>)
    }
}

export default AnimalCC;