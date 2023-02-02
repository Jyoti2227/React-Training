import React from "react";

const FunctionalProps = props => {
const data = [{
    name :"Jyotii",
    gender:"Female",
    id: 1
}]
    return(
        <>
            <button onClick={() => props.changeNameAsProps(data)}> Change Data </button>
        </>
    );
};

export default FunctionalProps;