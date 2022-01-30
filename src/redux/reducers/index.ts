import {combineReducers} from 'redux';
import {countriesReducer} from './countriesReducer';

const reducers = combineReducers({
  covidSummary: countriesReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
