import React from "react";

const EmployeeFunctionalComponent = ( { employeeList } ) => {
    return ( 
        <>
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
                            {employeeList.map((item,index) => 
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
        </>
     );
};

export default EmployeeFunctionalComponent;