import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type Props = {
  data: string[];
};

const HeaderComponent = (props: Props) => {
  const {data} = props;
  return (
    <View style={styles.container}>
      {data?.map(item => {
        return (
          <View style={styles.container}>
            <Text style={styles.itemStyle}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default HeaderComponent;
