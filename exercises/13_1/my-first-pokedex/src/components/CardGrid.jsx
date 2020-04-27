/* eslint-disable react/prop-types */
import React from 'react';
import Card from './PokemonCard';
import '../card-grid.css';

// eslint-disable-next-line react/prefer-stateless-function
class PokemonGrid extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="poke-grid">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemons={pokemon} />
        ))}
      </div>
    );
  }
}

export default PokemonGrid;
