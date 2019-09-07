import { isLoggable } from './interfaces/Loggable';
/**
 * An error for things that are Loggable
 */
export class LoggableError extends Error {
    constructor(message, debugObject) {
        super(LoggableError.formatMessage(message, debugObject));
        this.name = 'LoggableError';
    }
    static formatMessage(message, debugObject) {
        if (isLoggable(debugObject)) {
            debugObject = debugObject.toLoggableObject();
        }
        return `${message} - ${JSON.stringify(debugObject, null, 2)}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2FibGVFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Mb2dnYWJsZUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBWSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUU1RDs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFjLFNBQVEsS0FBSztJQUd0QyxZQUFZLE9BQWUsRUFBRSxXQUFtQztRQUM5RCxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUgxRCxTQUFJLEdBQUcsZUFBZSxDQUFBO0lBSXRCLENBQUM7SUFFTyxNQUFNLENBQUMsYUFBYSxDQUMxQixPQUFlLEVBQ2YsV0FBbUM7UUFFbkMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDM0IsV0FBVyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1NBQzdDO1FBQ0QsT0FBTyxHQUFHLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUMvRCxDQUFDO0NBQ0YifQ==