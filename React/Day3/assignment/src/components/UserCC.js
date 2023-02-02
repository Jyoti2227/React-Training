import React from "react";

class UserCC extends React.Component{
    constructor(){
         super();
        this.state = {
            userList : ['Jyotii','Vishal','Sidharth','Pujja','Sudharshan'],
        }
    }
    
    render(){
        return(<>
            <h2>User Class Component</h2>
             <ul>
                {this.state.userList.map((item,index) => 
                <li key={index}>{item}
                </li>)}
            </ul>
        </>)
    }
}
export default UserCC;