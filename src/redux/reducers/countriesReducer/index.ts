import {Action, ActionType} from '../../actionTypes';

export interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export interface Summary {
  ID: string;
  Message: string;
  Global: Global;
  Countries: Country[];
  Date: string;
}

interface State {
  summary?: Summary;
  loading: boolean;
  error: string | null;
}

const initialState = {
  summary: undefined,
  loading: false,
  error: null,
};

export const countriesReducer = (
  state: State = initialState,
  action: Action,
): State => {
  switch (action.type) {
    case ActionType.GET_COUNTRIES_SUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        summary: action.payload,
      };

    default:
      return state;
  }
};
