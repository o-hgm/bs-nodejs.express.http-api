module.exports = {
    testEnvironment: 'node',
    collectCoverageFrom: ['**./*.js', '!**/node_modules/**', '!**/coverage/**'],
    moduleNameMapper: {
        "@/src/(.*)$": "<rootDir>/src/$1",
    }
};
  