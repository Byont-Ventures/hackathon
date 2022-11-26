/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testMatch: ['<rootDir>/**/*.test.tsx'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    uuid: require.resolve('uuid'),
  },
};

module.exports = createJestConfig(customJestConfig);
