import {Summary} from '../reducers/countriesReducer';

export enum ActionType {
  GET_COUNTRIES_SUMMARY_SUCCESS = 'GET_COUNTRIES_SUMMARY_SUCCESS',
}

interface actionSuccess {
  type: ActionType.GET_COUNTRIES_SUMMARY_SUCCESS;
  payload: Summary;
}

export type Action = actionSuccess;
