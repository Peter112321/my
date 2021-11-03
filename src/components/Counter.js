import React, { useState } from "react";
import { useDispatch } from 'react-redux';

function Counter() {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);

    function increase() {
        dispatch({ type: 'updateCounterSum', payload: 1 })
        return setNumber(number + 1)
    }
    function decrease() {
        dispatch({ type: 'updateCounterSum', payload: -1 })
        return setNumber(number - 1)
    }

    return (
        <div className="eachCounter">
            <button onClick={increase} > 👍 </button>
            <span> {number} </span>
            <button onClick={decrease} > 👎 </button>
        </div>
    )
}
export default Counter;