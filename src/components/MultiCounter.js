import React, { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter() {
    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(size) {
        setCounterSize(size);
    }

    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
        </div>
    )
}

export default MultiCounter;