import React, { useState } from "react";
export default function ChildComponent2({onclick}){
    return(
        <div className="child2">
            <h2>Child Component2</h2>
            <button onClick={()=>onclick("Option 2")}>Option 2</button>
        </div>
    )
}