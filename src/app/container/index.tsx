import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../../screens/mainScreen';
import CountriesListScreen from '../../screens/countriesListScreen';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen name="CountriesList" component={CountriesListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppContainer;
