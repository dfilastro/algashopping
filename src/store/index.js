import { configureStore, combineReducers } from 'redux';
import calculatorReducer from './Calculator/Calculator.reducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = configureStore(rootReducer);

export default store;
