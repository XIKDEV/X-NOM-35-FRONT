module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|ico|svg)$': 'jest-file-mock',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{ts,tsx}',
    '!src/main.{ts,tsx}',
    '!src/interfaces/*.ts',
    '!src/router/*.{ts,tsx}',
    '!src/*/routes/*.{ts,tsx}',
  ],
  coverageReporters: ['lcov', 'text-summary'],
};
