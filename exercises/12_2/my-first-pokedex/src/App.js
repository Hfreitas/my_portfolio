/* eslint-disable no-undef */
import React from 'react';
import pokemons from './data';
import PokemonGrid from './card-grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="dex-header">
        <h1>Vanilla PokeDex</h1>
      </header>
      <div>
        <PokemonGrid key={pokemons.name} pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
