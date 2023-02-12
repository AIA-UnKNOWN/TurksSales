module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    'react-native-reanimated/plugin',
    ['module-resolver', {
      alias: {
        // Should be mirrored in tsconfig.json
        '@src': './src'
      }
    }],
  ],
};
