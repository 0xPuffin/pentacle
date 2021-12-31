const {defaults} = require('jest-config');

module.exports = {
    setupFilesAfterEnv: ["./setupTests.ts"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
