module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/node_modules/react-native/Libraries/react-native/',
    '<rootDir>/node_modules/react-native/packager/',
  ],
  moduleNameMapper: {
    '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/jest/RelativeImageStub.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testMatch: ['**/__tests__/**/*.test.js'],
  coverageDirectory: '__tests__/coverage',
};
