module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
    assets: '/assets',
  },
  scripts: { 'build:css': 'postcss' },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
    '@state': './src/state-module',
    '@assets': './src/shared-module/assets',
  },
};
