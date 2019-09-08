import { Logger } from './Logger'

describe('Logger', () => {
  describe('constructor', () => {
    test('without arguments', () => {
      const logger = new Logger()
      expect(logger.console).toBe(console)
      expect(logger.name).toBeUndefined()
      expect(logger.timestamp.format).toBe('datetime')
    })

    test('with name', () => {
      const logger = new Logger({ name: 'test' })
      expect(logger.name).toBeDefined()
      expect(logger.name!.toLoggableObject()).toBe('test')
    })
  })

  describe('log functions', () => {
    test.todo('should log correctly')
  })
})
