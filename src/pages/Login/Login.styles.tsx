import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loginPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 20,
  },
  field: {
    width: 250,
    marginBottom: 10,
    
    textInput: {
      backgroundColor: '#d9d9d9',
      paddingHorizontal: 10,
      height: 40,
    },
  },
  submitButton: {
    backgroundColor: '#88e685',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});