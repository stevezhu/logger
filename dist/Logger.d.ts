import { LogFunction } from './';
import { Styleable } from './interfaces/Styleable';
import { Timestamp, TimestampFormat } from './Timestamp';
export declare enum LogLevel {
    Error = "error",
    Warn = "warn",
    Info = "info",
    Debug = "debug"
}
declare const DEFAULT_STYLES: {
    name: string;
    timestamp: string;
    levels: string;
    error: string;
    warn: string;
    info: string;
    debug: string;
};
export declare class Logger {
    private styles;
    console: Console;
    name?: Styleable<string>;
    timestamp: Timestamp;
    readonly error: LogFunction;
    readonly warn: LogFunction;
    readonly info: LogFunction;
    readonly debug: LogFunction;
    constructor({ console, name, timestampFormat, styles, }?: {
        console?: Console;
        name?: string;
        timestampFormat?: TimestampFormat;
        styles?: Partial<typeof DEFAULT_STYLES>;
    });
    private createLogFunction;
}
export {};
