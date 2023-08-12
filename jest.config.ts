/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.ts'],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
