import { Loggable, isLoggable } from './Loggable'

/**
 * An error for things that are Loggable
 */
export class LoggableError extends Error {
  name = 'LoggableError'

  constructor(message: string, debugObject: Loggable<any> | Object) {
    super(LoggableError.formatMessage(message, debugObject))
  }

  private static formatMessage(
    message: string,
    debugObject: Object | Loggable<any>,
  ): string {
    if (isLoggable(debugObject)) {
      debugObject = debugObject.toLoggableObject()
    }
    return `${message} - ${JSON.stringify(debugObject, null, 2)}`
  }
}
