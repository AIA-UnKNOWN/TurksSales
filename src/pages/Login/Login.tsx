import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// Styles
import styles from './Login.styles';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.loginPage}>
      <View style={styles.loginForm}>
        <View style={styles.field}>
          <Text>Username</Text>
          <TextInput
            style={styles.field.textInput}
            onChangeText={username => setUsername(username)}
            value={username}
          />
        </View>
        <View style={styles.field}>
          <Text>Password</Text>
          <TextInput
            style={styles.field.textInput}
            onChangeText={username => setPassword(username)}
            value={password}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => console.log('login')}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;