import React from "react";
import FunctionalProps from "./FunctionalProps";
import EmployeerList from "./EmployeerList";

class UserTable extends React.Component{
    constructor(props) {
    super(props);
    this.state ={
        userData :[
            {
    name:"Jyotii",
    gender:"Female",
    id:1,
  },
  {
    name:"Jyoti",
    gender:"Female",
    id:2,
  },
  {
    name:"Vishal",
    gender:"Male",
    id:3,
  },
  {
    name:"Sid",
    gender:"Male",
    id:4,
  },
  {
    name:"Pujaa",
    gender:"Female",
    id:5,
  },
],
temp : "Jyoti",
isVisible : false,
     } ; 
    
    }
    showEmployeerList(){
        this.setState({
            isVisible:true}
        );
    }

    unmount(){
         this.setState({
            isVisible:false}
        );
    }
    changeName = (data) =>{
        this.setState({
            userData:data
        });
    }
    render(){
        return(
            <>
                <h2>Function as props</h2>
                <FunctionalProps changeNameAsProps = {this.changeName}/>
                <div className="container">
                    <table className="table stripped text-left" style={{ background: "blue", color: "white" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userData.map((item,index) => 
                                <tr key={index}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.gender}
                                </td>
                                <td>
                                    {item.id}
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <h2>Mounting Example</h2>
                <button onClick={() => this.showEmployeerList()}> Show Employee List</button>
                {this.state.isVisible && <EmployeerList/>}
                <button onClick={() => this.unmount()}>Unmount Data</button>
            </>
        )
    }
}

export default UserTable;