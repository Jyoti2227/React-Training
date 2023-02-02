import React, { useState } from "react";

const CounterOp = (props) => {
const [data] = useState(1);

    
    return(
        <>
            <button onClick={() => props.incrementCounter(data)}> Increment Counter </button>
            <br></br>
            <button onClick={() => props.decrementCounter(data)}> Decrement Counter </button>
            <br></br>
            <button onClick={() => props.resetCounter(0)}>Reset Counter</button>
            <h2>Child counter is {props.counter}</h2>
        </>
    );
};

export default CounterOp;