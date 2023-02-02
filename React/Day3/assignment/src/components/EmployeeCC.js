import React from "react";

class EmployeeCC extends React.Component{

    constructor(){
         super();
        this.state = {
            employeeList : ['Jyotii','Vishal','Sidharth','Pujja','Sudharshan'],
        }
    }
    
    render(){
        return(<>
            <h2>Employee Class Component</h2>
             <ul>
                {this.state.employeeList.map((item,index) => 
                <li key={index}>{item}
                </li>)}
            </ul>
        </>)
    }
}
export default EmployeeCC;