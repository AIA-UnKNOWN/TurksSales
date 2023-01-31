import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';

// Screens
import {
  DSRPage,
  SalesTrackerPage,
  Admin,
} from '../src/pages';


const Drawer = createDrawerNavigator();

const App: () => Node = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="DSR">
          <Drawer.Screen
            name="DSR"
            component={DSRPage}
          />
          <Drawer.Screen
            name="Sales Tracker"
            component={SalesTrackerPage}
          />
          <Drawer.Screen
            name="Admin"
            component={Admin}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
