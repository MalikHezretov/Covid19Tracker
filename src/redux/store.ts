import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// TODO: import root reducer and define the type later on
const reducers: any = () => {};

export const store = createStore(reducers, {}, applyMiddleware(thunk));
