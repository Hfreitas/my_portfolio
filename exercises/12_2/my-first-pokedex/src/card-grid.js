/* eslint-disable react/prop-types */
import React from 'react';
import Card from './pokemon_card';
import './card-grid.css';

// eslint-disable-next-line react/prefer-stateless-function
class PokemonGrid extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="poke-grid">
        {pokemons.map((pokemon) => (
          <Card pokemons={pokemon} />
        ))}
      </div>
    );
  }
}

export default PokemonGrid;
