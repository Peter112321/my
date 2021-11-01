import React, { useState, useEffect } from 'react'
import Counter from './Counter'


function CounterGroup(props) {
    const [counterList, setCounterList] = useState([])

    function increaseSum() {
        props.increaseSum()
    }

    function decreaseSum() {
        props.decreaseSum()
    }

    useEffect(() => {
        const counters = new Array(props.counterSize).fill(Date.now());
        setCounterList(counters)
    }, [props.counterSize])


    return (
        <div>
            {
                counterList.map((item, index) => (
                    <Counter key={item + index} 
                             increaseSum={increaseSum} 
                             decreaseSum={decreaseSum}
                    />
                ))
            }
        </div>
    )
}

export default CounterGroup;