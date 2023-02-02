import React ,{ useState }from "react";

const FunctionalBasedComponent = ({ name }) => {
    const[count,setCount] = useState(0);
    return(
        <>
            <h1>FunctionalBasedComponent  {name}</h1>
            <h2>Your clocked {count} times</h2>
            <button onClick={() => setCount(count + 1)}>Change count</button>
        </>
    );
};

export default FunctionalBasedComponent;