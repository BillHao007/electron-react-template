const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname),
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        buffer: false,
        stream: false,
      }
      return webpackConfig;
    }
  }
}