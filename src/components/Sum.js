import React from "react";
import { useSelector } from "react-redux";

const CounterSum = () => {
    const counterSum = useSelector((state) => state.counterSum); return (
        <div>
            Sum: {counterSum}
        </div>
    )
};

export default CounterSum;