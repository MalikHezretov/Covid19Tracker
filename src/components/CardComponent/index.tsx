import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Country} from '../../redux/reducers/countriesReducer';
import styles from './styles';

type Props = {
  data: Country[];
  navigation: any;
};

const RowComponent = (props: Props) => {
  const {data, navigation} = props;
  return (
    <View style={styles.container}>
      {data?.map((item: Country) => {
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.itemStyle}>{item.Country}</Text>
            <Text style={styles.itemStyle}>{item.TotalConfirmed}</Text>
            <Text style={styles.itemStyle}>{item.TotalRecovered}</Text>
            <Text style={styles.itemStyle}>{item.NewConfirmed}</Text>
            <Text style={styles.itemStyle}>{item.TotalDeaths}</Text>
          </View>
        );
      })}
      <TouchableOpacity onPress={() => navigation.navigate('CountriesList')}>
        <Text style={styles.textButtonStyle}>See more...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RowComponent;
