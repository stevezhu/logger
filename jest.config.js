module.exports = {
  roots: ['<rootDir>/src/'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/jest/expect-toLog.ts'],
  globals: {
    'ts-jest': { tsConfig: 'tsconfig.test.json' },
  },
}
