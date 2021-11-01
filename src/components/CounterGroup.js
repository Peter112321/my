import React, { useState, useEffect } from 'react';
import Counter from './Counter';


function CounterGroup(props) {
    const [counterList, setCounterList] = useState([]);

    useEffect(() => {
        const counters = new Array(props.counterSize).fill(Date.now());
        setCounterList(counters);
    }, [props.counterSize]);

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index}></Counter>
            ))}
        </div>
    );
}

export default CounterGroup;