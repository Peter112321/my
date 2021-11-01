import React, { useState } from "react";

function CounterSizeGenerator(props) {

    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        setSize(parseInt(event.target.value))
    }

    function generateCounter(){
        props.updateCounterSize(size);
    }
    return (
        <div>
            <span>Size:</span>
            <input min="0" type="number" value={size} onChange={handleChangeSize}></input>
            <button onClick={generateCounter}>generate</button>
        </div>
    );
}

export default CounterSizeGenerator;