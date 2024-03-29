import { printDiffOrStringify } from 'jest-matcher-utils'
import { WritableStreamBuffer } from 'stream-buffers'
import { Console } from 'console'

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Checks that that output from the log calls equal the expected.
       */
      toLog(expected: string): R
    }
  }
}

// TODO add tests
expect.extend({
  toLog(received: (console: Console) => void, expected: string) {
    const name = 'toLog'

    const stream = new WritableStreamBuffer()
    received(new Console(stream))
    const actual = stream.getContentsAsString()
    const pass = Object.is(actual, expected)

    const { matcherHint, printExpected } = this.utils
    const message = pass
      ? () =>
          matcherHint(name) +
          '\n\n' +
          `Expected: not ${printExpected(expected)}`
      : () => {
          return (
            matcherHint(name) +
            '\n\n' +
            printDiffOrStringify(
              expected,
              actual,
              'Expected',
              'Received',
              this.expand,
            )
          )
        }

    return {
      name,
      actual,
      expected,
      pass,
      message,
    }
  },
})
