import React from "react";
const EmployeerList = () => {
    const employeeList = ['Yash','Info','Cybage','BMW','MasterCard'];
    return(
        <>
            <ul>
                {employeeList.map((item,index) => 
                <li key={index}>{item}
                </li>)}
            </ul>
        </>
    );
};

export default EmployeerList;