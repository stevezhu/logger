import { Styleable } from './Styleable'

export enum TimestampFormat {
  DateTime,
  Time,
  Offset,
}

interface TimestampFunction extends Function {
  toString: () => string
}

export class Timestamp implements Styleable<TimestampFunction> {
  style: string
  timestampFn: TimestampFunction

  constructor(
    format: TimestampFormat,
    style: string = 'color: gray; font-style: italic;',
  ) {
    this.style = style
    this.timestampFn = Object.assign(() => {}, {
      toString: createToStringFunction(format),
    })
  }

  toLoggableObject() {
    return this.timestampFn
  }

  getStyle() {
    return this.style
  }
}

function createToStringFunction(format: TimestampFormat) {
  switch (format) {
    case TimestampFormat.DateTime:
      return () => new Date().toLocaleString()
    case TimestampFormat.Time:
      return () => new Date().toLocaleTimeString()
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
