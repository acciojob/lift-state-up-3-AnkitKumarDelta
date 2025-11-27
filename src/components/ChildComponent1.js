import React, { useState } from "react";
export default function ChildComponent1({onclick}){
    return(
        <div className="child1">
            <h2>Child Component1</h2>
            <button onClick={()=>onclick("Option 1")}>Option 1</button>
        </div>
    )
}