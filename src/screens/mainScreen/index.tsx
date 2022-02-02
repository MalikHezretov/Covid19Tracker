import React, {useCallback, useEffect} from 'react';
import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import styles from './styles';
import {getCountries} from '../../redux/actionCreators';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/useTypeSelector';
import {useQuery} from 'react-query';
import {Summary} from '../../redux/reducers/countriesReducer';
import {fetchCovidSummary} from '../../api';
import {getTopCovidCasesByCountry, headerArray} from '../../utils/helpers';
import RowComponent from '../../components/CardComponent';
import HeaderComponent from '../../components/headerComponent';

const MainScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {covidSummary} = useTypedSelector(state => state.covidSummary);
  const {isLoading, data} = useQuery('summaryData', fetchCovidSummary);

  const fetchCountries = useCallback(
    async (queryData: Summary) => {
      await dispatch(getCountries(queryData));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchCountries(data?.data);
  }, [data?.data, fetchCountries]);

  const topFiveCovidCountries = getTopCovidCasesByCountry(covidSummary);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ActivityIndicator />}
      <View style={styles.headerStyle}>
        <HeaderComponent data={headerArray} />
      </View>
      <RowComponent data={topFiveCovidCountries} navigation={navigation} />
    </SafeAreaView>
  );
};

export default MainScreen;
