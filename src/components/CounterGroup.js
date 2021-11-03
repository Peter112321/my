import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Counter from './Counter'

const CounterGroup = () => {
  const counterSize = useSelector((state) => state.counterSize);
  const [counterList, setCounterList] = useState([]);

  useEffect(() => {
    const array = new Array(counterSize).fill(Date.now())
    setCounterList(array);}
    , [counterSize]);

  return (
    <div>
      {counterList.map((item, index) =><Counter key={item + index}/>)}
    </div>
  );
}

export default CounterGroup;