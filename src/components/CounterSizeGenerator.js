import { useDispatch,useSelector } from "react-redux"

export const CounterSizeGenerator = () => {
    const dispatch = useDispatch();
    const counterSize = useSelector((state) => state.counterSize);
  
    const handleSizeChange = (e) => {
      let newSize = parseInt(e.target.value.toString());
      if (newSize >= 1 && newSize <= 5 && newSize !== counterSize) {
        dispatch({ type: 'resetSum' });
        dispatch({ type: 'updateCounterSize', payload: newSize });
      }
    }
  
    const generateNewCounterWithRandomSize = () => {
      const newSize = 1 + Math.floor(Math.random() * 5);
      if (newSize !== counterSize) {
        dispatch({ type: 'updateCounterSize', payload: newSize });
        dispatch({ type: 'resetSum' });
      }
    }
    return (
        <div className="CounterSizeGenerator">
            <span>Size: </span>
            <input type="number" min="1" max="5"value={counterSize} onChange={handleSizeChange}/>            
            <button onClick={generateNewCounterWithRandomSize}/>        
            </div>
    );

}