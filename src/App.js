import React from 'react';
import ClickCounter from './components/ClickCounter';
import ClickButton from './components/ClickButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Praticando React Redux</h1>
      <ClickCounter />
      <ClickButton />
    </div>
  );
}

export default App;
