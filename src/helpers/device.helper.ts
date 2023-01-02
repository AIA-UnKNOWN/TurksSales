import {
  useColorScheme,
} from 'react-native';

export const useDeviceTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  return {
    isDarkMode,
  }
}