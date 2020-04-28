/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PokeDex from './components/Pokedex';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="dex-header">
        <h1>Vanilla PokeDex</h1>
      </header>
      <div>
        <PokeDex />
      </div>
    </div>
  );
}

export default App;
