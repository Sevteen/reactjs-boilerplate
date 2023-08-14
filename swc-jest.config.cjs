// swc-jest.config.cjs
const { createTransformer } = require('@swc/jest');

module.exports = createTransformer({
  // Konfigurasi SWC di sini
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
    },
  },
});
