import { Loggable, isLoggable } from './Loggable'

describe('Loggable', () => {
  describe('isLoggable', () => {
    class LoggableObject implements Loggable<any> {
      toLoggableObject() {
        return 'loggable object'
      }
    }

    test('should return true for objects that are Loggable', () => {
      const loggableObjects = [
        new LoggableObject(),
        { toLoggableObject: () => 'loggable object' },
      ]
      for (const obj of loggableObjects) {
        expect(isLoggable(obj)).toBe(true)
      }
    })

    test("should return false for objects that aren't Loggable", () => {
      const unloggableObjs = [null, undefined, '', 100, true, {}]
      for (const obj of unloggableObjs) {
        expect(isLoggable(obj)).toBe(false)
      }
    })
  })
})
