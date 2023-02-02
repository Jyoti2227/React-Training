import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {

    const [count,setCount] = useState(0);
    const [data,setData] = useState([]);

    useEffect(() => {
        console.log("Use Effect every time on count value change" , count);
    },[count]);

    useEffect(() => {
        console.log("Use Effect only one time on count value change");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    return(<>
        <div className="container">
  <h4>Use Effect Example</h4>
  <p>You Clicked {count} times.</p>
  <button className="btn btn-warning" onClick={() => setCount(count + 1)}>Click me!</button>
  <hr/>
  <div className="container">
        <table className="table table-bordered"  style={{ width:"100%",border: "1p solid #CCC" }}>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employe Email</th>
              <th>Employee Website</th>
            </tr>
          </thead>
          <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.website}</td>
                    </tr>
                  ))}
            </tbody>
        </table>
  </div>
</div>
    </>);
};

export default UseEffectComponent;