import React from 'react';
import pokemons from './data';
import PokemonGrid from './card-grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

export default App;
