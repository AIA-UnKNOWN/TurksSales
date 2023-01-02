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
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={DSRPage} />
        <Stack.Screen name="SalesTrackerPage" component={SalesTrackerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
