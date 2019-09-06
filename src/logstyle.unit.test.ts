import { createStyleable } from './interfaces/Styleable'
import { logstyle, logstyleRecursive } from './logstyle'

describe('logstyle', () => {
  test('with empty template string', () => {
    expect(logstyle``).toEqual([''])
  })

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
    let counter = 0
    const count = Object.assign(() => {}, {
      toString: () => counter++,
    })
    // Can't use any styles here because node doesn't support `%c` which is
    // the substitution token used for styles in the browser.
    const output = logstyle`The counter is ${createStyleable(count, '')}`

    expect((log: LogFunction) => {
      log(...output)
      log(...output)
      log(...output)
    }).toLog('The counter is 0\nThe counter is 1\nThe counter is 2\n')
  })
})

describe('logstyleRecursive', () => {
  test('with string substitutions', () => {
    const text1 = createStyleable('This', 'color: gray')
    const text2 = createStyleable('some', '')
    const text3 = createStyleable('text', 'color: red')
    const output = logstyleRecursive`${text1}`` is ${text2} ``${text3}`()

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
})
