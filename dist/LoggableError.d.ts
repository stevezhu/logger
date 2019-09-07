import { Loggable } from './interfaces/Loggable';
/**
 * An error for things that are Loggable
 */
export declare class LoggableError extends Error {
    name: string;
    constructor(message: string, debugObject: Loggable<any> | Object);
    private static formatMessage;
}
