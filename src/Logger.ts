import { LogFunction } from './'
import { logstyleRecursive as logstyle } from './logstyle'
import { Styleable, createStyleable } from './interfaces/Styleable'
import { Timestamp, TimestampFormat } from './Timestamp'

export enum LogLevel {
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
  Debug = 'debug',
}

const DEFAULT_STYLES = {
  name: 'font-weight: bold',
  timestamp: 'color: gray; font-style: italic;',

  levels: 'color: white; text-transform: uppercase; padding: 0 0.4em;',
  error: 'background-color: red;',
  warn: 'background-color: #ffe000;', // yellow
  info: 'background-color: #66bb6a;', // green
  debug: 'background-color: gray;', // #7e57c2 purple
}

export class Logger {
  private styles: typeof DEFAULT_STYLES
  console: Console
  name?: Styleable<string>
  timestamp: Timestamp

  readonly error: LogFunction
  readonly warn: LogFunction
  readonly info: LogFunction
  readonly debug: LogFunction

  constructor({
    console = globalThis.console,
    name,
    timestampFormat = TimestampFormat.DateTime,
    styles = DEFAULT_STYLES,
  }: {
    console?: Console
    name?: string
    timestampFormat?: TimestampFormat
    styles?: Partial<typeof DEFAULT_STYLES>
  } = {}) {
    this.styles = Object.assign({}, DEFAULT_STYLES, styles)

    this.console = console

    if (name != null) {
      this.name = createStyleable<string>(name, styles.name)
    }
    this.timestamp = new Timestamp(timestampFormat, styles.timestamp)

    this.error = this.createLogFunction(LogLevel.Error)
    this.warn = this.createLogFunction(LogLevel.Warn)
    this.info = this.createLogFunction(LogLevel.Info)
    this.debug = this.createLogFunction(LogLevel.Debug)
  }

  private createLogFunction(levelObj: LogLevel): LogFunction {
    if (process.env.NODE_ENV == 'test') {
      return () => {}
    }

    const level = createStyleable<LogLevel>(
      levelObj,
      this.styles.levels + this.styles[levelObj],
    )

    let substitutions = logstyle`${this.timestamp} ${level}`
    if (this.name != null) {
      substitutions = substitutions` [${this.name}]`
    }
    return this.console[levelObj].bind(this.console, ...substitutions())
  }
}
