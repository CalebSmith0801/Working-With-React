import React from "react";
import "./charComp.css";

const charComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    )
}

export default charComponent;