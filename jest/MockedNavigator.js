import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../src/pages/Main';
import ListDetail from '../src/pages/ListDetail';

const Stack = createStackNavigator();

const MockedNavigator = ({component, params = {}}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
        <Stack.Screen name="ListDetail" component={ListDetail} options={{}} />
        <Stack.Screen name="Main" component={Main} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
