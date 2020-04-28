/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../style/pokemon_card.css';

class Card extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      moreInfo,
    } = this.props.pokemons;

    return (
      <div className="card-conteiner">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <p>Name : {name}</p>
        <p>Type:{type}</p>
        <p>
          Average Weight: {value} {measurementUnit}
        </p>
        <a href={moreInfo} target="blank">
          More Info
        </a>
      </div>
    );
  }
}

export default Card;
