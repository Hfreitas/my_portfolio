import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  inputOneAction,
  inputTwoAction,
  inputThreeAction,
} from '../actions/index';

const SumNumbersInputs = ({ value1, value2, value3, sum }) => {
  return (
    <div>
      <input
        type="number"
        name="input1"
        id="input1"
        placeholder="Digite um valor"
        onChange={(event) => value1(event.target.value)}
      />
      <input
        type="number"
        name="input2"
        id="input2"
        placeholder="Digite um valor"
        onChange={(event) => value2(event.target.value)}
      />
      <input
        type="number"
        name="input3"
        id="input3"
        placeholder="Digite um valor"
        onChange={(event) => value3(event.target.value)}
      />
      <h2>{`Soma dos campos: ${sum}`}</h2>
    </div>
  );
};

SumNumbersInputs.defaultProps = {
  sum: 0,
};

SumNumbersInputs.propTypes = {
  sum: PropTypes.number,
  value1: PropTypes.func.isRequired,
  value2: PropTypes.func.isRequired,
  value3: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  value1: (value1) => dispatch(inputOneAction(value1)),
  value2: (value2) => dispatch(inputTwoAction(value2)),
  value3: (value3) => dispatch(inputThreeAction(value3)),
});

const mapStateToProps = (state) => ({
  sum:
    state.sumInputsReducer.value1 +
    state.sumInputsReducer.value2 +
    state.sumInputsReducer.value3,
});

export default connect(mapStateToProps, mapDispatchToProps)(SumNumbersInputs);
