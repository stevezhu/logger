import { Timestamp, TimestampFormat } from './Timestamp'

describe('Timestamp', () => {
  describe('constructor', () => {
    test('with default style', () => {
      const timestamp = new Timestamp(TimestampFormat.DateTime)
      expect(timestamp.style).toBe('')
      expect(timestamp.timestampFn()).toBeUndefined()
    })

    test('with custom style', () => {
      const timestamp = new Timestamp(TimestampFormat.DateTime, 'color: red;')
      expect(timestamp.style).toBe('color: red;')
      expect(timestamp.timestampFn()).toBeUndefined()
    })
  })

  describe('toLoggableObject', () => {
    const dateNowSpy = jest.spyOn(globalThis.Date, 'now')

    beforeEach(() => dateNowSpy.mockImplementationOnce(() => 0))

    test.each`
      format                      | expected
      ${TimestampFormat.DateTime} | ${'12/31/1969, 7:00:00 PM'}
      ${TimestampFormat.Date}     | ${'12/31/1969'}
      ${TimestampFormat.Time}     | ${'7:00:00 PM'}
    `(
      'returns "$expected" for format $format',
      ({ format, expected }: { format: TimestampFormat; expected: string }) => {
        const timestamp = new Timestamp(format)
        const fn = timestamp.toLoggableObject()
        expect(fn.toString()).toBe(expected)
      },
    )

    test('returns correctly for format offset', () => {
      const timestamp = new Timestamp(TimestampFormat.Offset)
      const fn = timestamp.toLoggableObject()
      expect(fn.toString()).toBe('+0ms')

      dateNowSpy.mockImplementationOnce(() => 10)
      expect(fn.toString()).toBe('+10ms')
    })
  })
})
