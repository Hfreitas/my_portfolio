import { INPUT_1, INPUT_2, INPUT_3 } from '../actions/index';

const INITIAL_STATE = {
  value1: 0,
  value2: 0,
  value3: 0,
};

const sumInputsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_1:
      return { ...state, value1: Number(action.value) };
    case INPUT_2:
      return { ...state, value2: Number(action.value) };
    case INPUT_3:
      return { ...state, value3: Number(action.value) };
    default:
      return state;
  }
};

export default sumInputsReducer;
