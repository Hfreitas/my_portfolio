/* eslint-disable no-undef */
import React from 'react';
import pokemons from './data';
import PokemonCard from './components/PokemonCard';
import Button from './components/Button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      filter: 'All',
    };
  }

  pokemonFilter = () => {
    return this.state.filter === 'All'
      ? pokemons
      : pokemons.filter(({ type }) => type === this.state.filter);
  };

  updateIndexState = () => {
    this.setState((state) => {
      return this.state.index < (this.pokemonFilter()).length
        ? { index: state.index++ }
        : { index: (state.index = 0) };
    });
  };

updateFilterState = (event) => {
  this.setState({ filter: event.target.innerText });
}

  render() {
    const filteredPokemons = this.pokemonFilter();
    console.log(filteredPokemons);
    return (
      <div className="App">
        <header className="dex-header">
          <h1>Vanilla PokeDex</h1>
        </header>
        <div>
          <PokemonCard pokemons={filteredPokemons[this.state.index]} />
        </div>
        <Button handleClick={this.updateIndexState} label="Next Pokémon" />
        <Button handleClick={this.updateFilterState} label="Fire" />
        <Button handleClick={this.updateFilterState} label="Psychic" />
      </div>
    );
  }
}

export default App;
