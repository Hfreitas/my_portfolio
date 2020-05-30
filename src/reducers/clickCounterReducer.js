import { CLICK } from '../actions/index';

const INITIAL_STATE = { counter: 0 };

const clickCounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLICK:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

export default clickCounterReducer;
