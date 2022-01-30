import {Dispatch} from 'redux';
import {ActionType, Action} from '../actionTypes';
import {Summary} from '../reducers/countriesReducer';

export const getCountries = (data: Summary) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_COUNTRIES_SUMMARY_SUCCESS,
      payload: data,
    });
  };
};
