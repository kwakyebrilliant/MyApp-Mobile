/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const MetroConfig = require('@ui-kitten/metro-config');

/**
 * @see https://akveo.github.io/react-native-ui-kitten/docs/guides/improving-performance
 */
const evaConfig = {
  evaPackage: '@eva-design/eva',
};

const nodeLibs = require('node-libs-react-native');
nodeLibs.vm = require.resolve('vm-browserify');

module.exports = MetroConfig.create(evaConfig, {
  resolver: {
    extraNodeModules: nodeLibs,
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
    getPolyfills: () => [
      require.resolve('react-native/Libraries/polyfills/console.js'),
      require.resolve('react-native/Libraries/polyfills/error-guard.js'),
      require.resolve('react-native/Libraries/polyfills/Number.es6.js'),
      require.resolve(
        'react-native/Libraries/polyfills/String.prototype.es6.js',
      ),
      require.resolve(
        'react-native/Libraries/polyfills/Array.prototype.es6.js',
      ),
      require.resolve('react-native/Libraries/polyfills/Array.es6.js'),
      require.resolve('react-native/Libraries/polyfills/Object.es7.js'),
    ],
  },
}); 