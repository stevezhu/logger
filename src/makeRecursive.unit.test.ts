import { makeRecursive } from './makeRecursive'

describe('makeRecursive', () => {
  test('should make a function recursive correctly', () => {
    const timesTen = (x: number) => x * 10
    const add = (a: number, b: number) => a + b
    const timesTenRecursive = makeRecursive(0, timesTen, add)
    expect(timesTenRecursive()).toBe(0)
    expect(timesTenRecursive(1)()).toBe(10)
    expect(timesTenRecursive(1)(2)()).toBe(30)
  })
})
