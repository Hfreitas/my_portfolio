/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Button extends React.Component {
  render() {
    const { handleClick, label } = this.props;
    return (
      <button type="button" onClick={handleClick}>
        {label}
      </button>
    );
  }
}

export default Button;
