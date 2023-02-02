import React ,{useState}from "react";

const StateInFC = () => {
    const [userData] =useState( [
        {
    name :'Jyotii',
    age : 25,
    gender : 'Female',
  },
  {
    name :'Sidharth',
    age : 28,
    gender : 'Male',
  },
  {
    name :'Vishal',
    age : 26,
    gender : 'Male',
  },
  {
    name :'Pujja',
    age : 25,
    gender : 'Female',
  },
  {
    name :'Snehal',
    age : 25,
    gender : 'Female',
  },
]);
    return(
        <>
            <h2> UseState In Functional component</h2>
            <div className="container">
                    <table className="table stripped text-left" style={{ background: "green", color: "black", border:'1px solid black', marginLeft:'auto',marginRight:'auto'}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((item,index) => 
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
        </>
    );
};

export default StateInFC;