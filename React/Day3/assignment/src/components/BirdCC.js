import React from "react";

class BirdCC extends React.Component{
    constructor(){
         super();
        this.state = {
            birdList : ['Parrot','Sparrow','Eagle','Penguin','Duck'],
        }
    }
    
    render(){
        return(<>
            <h2>Bird Class Component</h2>
             <ul>
                {this.state.birdList.map((item,index) => 
                <li key={index}>{item}
                </li>)}
            </ul>
        </>)
    }
}
export default BirdCC;