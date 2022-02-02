import {Country, Summary} from '../../redux/reducers/countriesReducer';

export const getTopCovidCasesByCountry = (covidSummaryData?: Summary) => {
  const countriesCovidCases = [...(covidSummaryData?.Countries ?? [])];
  return countriesCovidCases
    ?.sort((a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed)
    ?.slice(0, 5);
};

export const headerArray = [
  'Country',
  'Total Confirmed',
  'Total Recovered',
  'New Cases',
  'Total Deaths',
];
