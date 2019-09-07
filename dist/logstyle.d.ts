import { Styleable } from './interfaces/Styleable';
/**
 * The output of the tag function and the input for `console.log`.
 */
declare type LogInput = [string, ...any[]];
export declare function logstyle(strs: TemplateStringsArray, ...vals: Styleable<any>[]): LogInput;
export declare const logstyleRecursive: {
    (): [string, ...any[]];
    (args_0: any, ...args_1: any[]): import("./makeRecursive").RecursiveFunction<[string, ...any[]]>;
};
export {};
