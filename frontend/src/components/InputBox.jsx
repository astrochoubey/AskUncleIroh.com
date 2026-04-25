import React from "react";

import {useState } from "react";

function Ask(){
    const[text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return(
        <div>
            <input 
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Ask Uncle Iroh"
            />
            <p>Current input: {text}</p>
        </div>
    );
};

export default Ask;