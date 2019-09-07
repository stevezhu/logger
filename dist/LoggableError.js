"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Loggable_1 = require("./interfaces/Loggable");
/**
 * An error for things that are Loggable
 */
class LoggableError extends Error {
    constructor(message, debugObject) {
        super(LoggableError.formatMessage(message, debugObject));
        this.name = 'LoggableError';
    }
    static formatMessage(message, debugObject) {
        if (Loggable_1.isLoggable(debugObject)) {
            debugObject = debugObject.toLoggableObject();
        }
        return `${message} - ${JSON.stringify(debugObject, null, 2)}`;
    }
}
exports.LoggableError = LoggableError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2FibGVFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Mb2dnYWJsZUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQTREO0FBRTVEOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsS0FBSztJQUd0QyxZQUFZLE9BQWUsRUFBRSxXQUFtQztRQUM5RCxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUgxRCxTQUFJLEdBQUcsZUFBZSxDQUFBO0lBSXRCLENBQUM7SUFFTyxNQUFNLENBQUMsYUFBYSxDQUMxQixPQUFlLEVBQ2YsV0FBbUM7UUFFbkMsSUFBSSxxQkFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzNCLFdBQVcsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtTQUM3QztRQUNELE9BQU8sR0FBRyxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDL0QsQ0FBQztDQUNGO0FBaEJELHNDQWdCQyJ9