import { WritableStreamBuffer } from 'stream-buffers'
import { Console } from 'console'
import { createStyleable } from './interfaces/Styleable'
import { logstyle, logstyleRecursive } from './logstyle'

describe('logstyle', () => {
  test('with string substitutions', () => {
    const text1 = createStyleable('This', 'color: gray')
    const text2 = createStyleable('some', '')
    const text3 = createStyleable('text', 'color: red')
    const output = logstyle`${text1} is ${text2} ${text3}`

    expect(output).toEqual([
      '%c%s%c is %s %c%s%c',
      'color: gray',
      'This',
      '',
      'some',
      'color: red',
      'text',
      '',
    ])
  })

  test('with function substitutions', () => {
    const stream = new WritableStreamBuffer()
    const customConsole = new Console({ stdout: stream })

    let counter = 0
    const count = Object.assign(() => {}, {
      toString: () => counter++,
    })
    // can't use any styles here because node doesn't support `%c`
    const output = logstyle`The counter is ${createStyleable(count, '')}`

    customConsole.log(...output)
    expect(stream.getContentsAsString()).toBe('The counter is 0\n')

    customConsole.log(...output)
    expect(stream.getContentsAsString()).toBe('The counter is 1\n')
  })
})
