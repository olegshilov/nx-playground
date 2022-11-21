const nxPreset = require('@nrwl/jest/preset').default;

/** @type {import('jest').Config} */
module.exports = {
  ...nxPreset,
  coverageReporters: ['text', 'cobertura'],
  collectCoverageFrom: ['./src/**'],
};
