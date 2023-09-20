module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        diagnostics: {
          // TODO: Unit test with .env, delete this ignoreCodes
          ignoreCodes: [1343, 1058],
        },
      },
    ],
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
    '!src/*/ui/styles.ts',
    '!src/*/styles/*.ts',
    '!src/Nom035App.{ts,tsx}',
    '!src/api/routes.ts',
    '!src/test/fixtures/*.ts',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  setupFiles: ['jest-matchmedia-mock'],
};
