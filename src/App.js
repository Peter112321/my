import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';
import CounterSizeGenerator from './components/CounterSizeGenerator';
import MultiCounter from './components/MultiCounter';
import './Style/Counter.css'

import {createStore} from 'redux'
import counterReducer from './store/CounterReducer'



function App() {

  const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <div className="Counter">
      <MultiCounter/>
    </div>
  );
}

export default App;
