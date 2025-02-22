import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const countInc = () => {
    setCount(count + 1);
  };

  const countDec = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={countDec}>
          - Минус
        </button>
        <button className="plus" onClick={countInc}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
