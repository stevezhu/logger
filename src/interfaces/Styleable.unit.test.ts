import { Styleable, createStyleable } from './Styleable'

describe('Styleable', () => {
  describe('createStyleable', () => {
    test('should create a Styleable object correctly', () => {
      let styleable = createStyleable('test', 'color: red;')
      expect(styleable.toLoggableObject()).toBe('test')
      expect(styleable).toHaveProperty('style', 'color: red;')

      styleable = createStyleable('test')
      expect(styleable.toLoggableObject()).toBe('test')
      expect(styleable).toHaveProperty('style', '')
    })
  })
})
