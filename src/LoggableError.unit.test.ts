import { LoggableError } from './LoggableError'
import { Loggable } from './interfaces/Loggable'

describe('LoggableError', () => {
  describe('constructor', () => {
    test('with debugObject as type Loggable that returns object', () => {
      const loggable: Loggable<{}> = { toLoggableObject: () => ({ a: 1 }) }
      const error = new LoggableError('Test error', loggable)
      expect(error.message).toBe('Test error - {\n  "a": 1\n}')
      expect(error.name).toBe('LoggableError')
      expect(error.stack).toMatch(
        /^LoggableError: Test error - {\n  "a": 1\n}\n    at Object.<anonymous>.+?LoggableError\.unit\.test\.ts/,
      )
    })

    test('with debugObject as type Loggable that returns number', () => {
      const loggable: Loggable<number> = { toLoggableObject: () => 1 }
      const error = new LoggableError('Test error', loggable)
      expect(error.message).toBe('Test error - 1')
    })

    test('with debugObject as type Loggable that returns string', () => {
      const loggable: Loggable<string> = { toLoggableObject: () => 'test' }
      const error = new LoggableError('Test error', loggable)
      expect(error.message).toBe('Test error - "test"')
    })

    test('with debugObject as type Object', () => {
      const error = new LoggableError('Test error', { a: 1 })
      expect(error.message).toBe('Test error - {\n  "a": 1\n}')
    })
  })

  describe('throw', () => {
    test('with debugObject as type Loggable', () => {
      expect(() => {
        const loggable: Loggable<{}> = { toLoggableObject: () => ({ a: 1 }) }
        throw new LoggableError('Test error', loggable)
      }).toThrow('Test error - {\n  "a": 1\n}')
    })

    test('with debugObject as type Object', () => {
      expect(() => {
        throw new LoggableError('Test error', { a: 1 })
      }).toThrow('Test error - {\n  "a": 1\n}')
    })
  })
})
