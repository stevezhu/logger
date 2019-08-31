import { Styleable } from './interfaces/Styleable'

export enum TimestampFormat {
  DateTime = 'datetime',
  Date = 'date',
  Time = 'time',
  Offset = 'offset',
}

/**
 * Function that when logged with `%s` in `console.log` will output the return
 * value of the `toString` method.
 *
 * Eg. The following would output `1`.
 * ```
 * let fn: TimestampFunction = { toString: () => 1 }
 * console.log('%s', fn)
 * ```
 */
interface TimestampFunction extends Function {
  toString: () => string
}

export class Timestamp implements Styleable<TimestampFunction> {
  style: string
  timestampFn: TimestampFunction

  constructor(format: TimestampFormat, style: string = '') {
    this.style = style
    this.timestampFn = Object.assign(() => {}, {
      toString: createToStringFunction(format),
    })
  }

  toLoggableObject() {
    return this.timestampFn
  }
}

function createToStringFunction(format: TimestampFormat) {
  switch (format) {
    case TimestampFormat.DateTime:
      return () => new Date(Date.now()).toLocaleString()
    case TimestampFormat.Date:
      return () => new Date(Date.now()).toLocaleDateString()
    case TimestampFormat.Time:
      return () => new Date(Date.now()).toLocaleTimeString()
    case TimestampFormat.Offset:
      let prevTime: number | null = null
      return () => {
        const time = Date.now()
        if (prevTime == null) {
          prevTime = time
        }
        const diff = time - prevTime
        prevTime = time
        return `+${diff}ms`
      }
  }
}
