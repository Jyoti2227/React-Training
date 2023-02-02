import React from "react";

class StateInCC extends React.Component{

    constructor(){
         super();
        this.state = {
            users :[
                    {
                        name :'Jyotii',
                        age : 25,
                        gender : 'Female',
                    },
                    {
                        name :'Pujja',
                        age : 25,
                        gender : 'Female',
                    },
                    {
                        name :'Vishal',
                        age : 26,
                        gender : 'Male',
                    },
                    {
                        name :'Sidharth',
                        age : 28,
                        gender : 'Male',
                    },
                    {
                        name :'Snehal',
                        age : 25,
                        gender : 'Female',
                    },
                   ]
        };
    }
    render(){
        return(
        <>
            <h2>State In Class Component</h2>
                <div className="container">
                    <table className="table stripped text-left" style={{ background: "blue", color: "white", border:'1px solid black', marginLeft:'auto',marginRight:'auto'}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((item,index) => 
                                <tr key={index}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.age}
                                </td>
                                <td>
                                    {item.gender}
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
        </>)
    }
}

export default StateInCC;