import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from './styles';

const MainScreen = ({navigation}: any) => {
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
