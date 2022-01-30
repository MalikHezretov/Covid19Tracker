import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../../screens/mainScreen';
import CountriesListScreen from '../../screens/countriesListScreen';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import {QueryClientProvider, QueryClient} from 'react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const AppContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{title: 'Overview'}}
            />
            <Stack.Screen
              name="CountriesList"
              component={CountriesListScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};

export default AppContainer;
