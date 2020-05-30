import { CLICK } from '../actions/index';

const INITIAL_STATE = 0;

const clickCounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLICK:
      return state + 1;
    default:
      return state;
  }
};

export default clickCounterReducer;
