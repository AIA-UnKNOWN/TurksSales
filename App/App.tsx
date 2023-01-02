import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import {
  DSRPage,
  SalesTrackerPage,
} from '../src/pages';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DSR">
        <Stack.Screen
          name="DSR"
          component={DSRPage}
          options={{
            title: 'Daily Sales Report (DSR)',
          }}
        />
        <Stack.Screen
          name="Sales Tracker"
          component={SalesTrackerPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
