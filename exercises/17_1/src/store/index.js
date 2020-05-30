import { createStore, combineReducers } from 'redux';
import clickCounterReducer from '../reducers/clickCounterReducer';
import sumInputsReducer from '../reducers/sumInputsReducer';

const rootReducer = combineReducers({ clickCounterReducer, sumInputsReducer });

const store = createStore(rootReducer);

export default store;
