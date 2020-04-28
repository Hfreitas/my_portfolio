import React from 'react';

/* Componente stateless, por isso construído como função, dessa forma, havendo
props, elas são passadas como argumentos e referidas no escopo da função */
function Button(props) {
  const { disabled, handleClick, label } = props;
  return (
    <button type="button" onClick={handleClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
