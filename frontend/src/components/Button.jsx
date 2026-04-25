import React from "react";

function Button(){
    function click(){
        setResponse("Ah… a wise question.");
    }

    return (
        <button onClick={(click)}>Pour Tea 🍵</button>
    );
}

export default Button;