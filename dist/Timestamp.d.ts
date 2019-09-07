import { Styleable } from './interfaces/Styleable';
export declare enum TimestampFormat {
    DateTime = "datetime",
    Date = "date",
    Time = "time",
    Offset = "offset"
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
    toString: () => string;
}
export declare class Timestamp implements Styleable<TimestampFunction> {
    format: TimestampFormat;
    style: string;
    timestampFn: TimestampFunction;
    constructor(format: TimestampFormat, style?: string);
    toLoggableObject(): TimestampFunction;
}
export {};
