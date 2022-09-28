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
  },
});
