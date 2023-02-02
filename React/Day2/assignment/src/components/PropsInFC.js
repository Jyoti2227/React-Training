import React from "react";

const PropsInFC = ({users}) => {
    return(
        <>
            <h2>Props In Functional Component</h2>
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
                            {users.map((item,index) => 
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

export default PropsInFC;