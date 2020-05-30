import React from 'react';
import ClickCounter from './components/ClickCounter';
import ClickButton from './components/ClickButton';
import SumNumberInputs from './components/SumNumbersInputs';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Praticando React Redux</h1>
      <div>
        <ClickCounter />
        <ClickButton />
      </div>
      <div>
        <SumNumberInputs />
      </div>
    </div>
  );
}

export default App;
