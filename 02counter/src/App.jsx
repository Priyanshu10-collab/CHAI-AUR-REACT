import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(4);

  const Increase = () => {
    //setCounter(prevCounter => counter + 1);
    setCounter(prevCounter => {
      if (prevCounter < 20) {
        return prevCounter + 1;
      }
      return prevCounter; // Prevent going above 20
    });
  };

  const Decrease = () => {
    setCounter(prevCounter => {
      if (prevCounter > 0) {
        return prevCounter - 1;
      }
      return prevCounter; // Prevent going below 0
    });
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={Increase} disabled={counter >= 20}>
        Increment Value (+)
      </button><br /><br />

      <button onClick={Decrease} disabled={counter <= 0}>
        Decrement Value (-)
      </button>
    </>
  );
}

export default App;