import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';
import CounterSizeGenerator from './components/CounterSizeGenerator';
import MultiCounter from './components/MultiCounter';

function App() {
  return (
    <div className="App">
      <MultiCounter></MultiCounter>
    </div>
  );
}

export default App;
