import React from 'react';
import {
  View,
  Text,
} from 'react-native';

// Pages
import {
  Login,
} from '..';
// Hooks
import useAdmin from './Admin.hook';

const Admin = () => {
  const {
    isAuthenticated,
  } = useAdmin();
  
  return isAuthenticated
    ? (
      <View>
        <Text>Welcome back Admin!</Text>
      </View>
    ) : <Login />;
}

export default Admin;