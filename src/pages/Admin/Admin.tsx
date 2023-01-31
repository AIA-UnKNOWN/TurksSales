import React from 'react';
import {
  View,
  Text,
} from 'react-native';

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
    ) : (
      <View>
        <Text>Please login first.</Text>
      </View>
    );
}

export default Admin;