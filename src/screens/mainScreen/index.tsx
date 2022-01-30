import React, {useCallback, useEffect} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from './styles';
import {getCountries} from '../../redux/actionCreators';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/useTypeSelector';
import {useQuery} from 'react-query';
import {Summary} from '../../redux/reducers/countriesReducer';
import {fetchCovidSummary} from '../../api';

const MainScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {summary} = useTypedSelector(state => state.covidSummary);
  const {isLoading, error, data} = useQuery('summaryData', fetchCovidSummary);

  console.log('summary: ', summary);
  console.log('loading: ', isLoading);
  console.log('error: ', error);

  const fetchCountries = useCallback(
    async (queryData: Summary) => {
      await dispatch(getCountries(queryData));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchCountries(data?.data);
  }, [data?.data, fetchCountries]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('CountriesList')}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
