import axios from 'axios';

export const fetchCovidSummary = async () => {
  const res = await axios.get('https://api.covid19api.com/summary');
  return res;
};
