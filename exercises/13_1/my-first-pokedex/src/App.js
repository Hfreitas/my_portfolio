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
      data: pokemons,
      index: 0,
    };
  }

  updateCardState = () => {
    this.setState((state) => {
      //Por que só roda com length -1
      return state.index < state.data.length
        ? { index: state.index++ }
        : { index: (state.index = 0) };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="dex-header">
          <h1>Vanilla PokeDex</h1>
        </header>
        <div>
          <PokemonCard pokemons={pokemons[this.state.index]} />
        </div>
        <Button handleClick={this.updateCardState} label="Botão 1" />
      </div>
    );
  }
}

export default App;
