/**
 * An array with at least one element.
 */
declare type NonEmptyArray<T> = [T, ...T[]];
/**
 * A function that reduces two values into a single value.
 */
declare type ReduceFunction<T> = (a: T, b: T) => T;
/**
 * A function that is run on the args each time the recursive function is
 * called.
 */
declare type MapFunction<T> = (...args: NonEmptyArray<any>) => T;
/**
 * A function that returns the final value if no arguments are given. Or
 * otherwise returns another recursive function if at least one argument is
 * given.
 */
export declare type RecursiveFunction<T> = {
    (): T;
    (...args: NonEmptyArray<any>): RecursiveFunction<T>;
};
/**
 *
 * @param initial The initial value of the accumulator.
 * @param fn The input type for this function must have at least one argument
 * because the final evaluation call for the returned recursive function is
 * defined by having no arguments. The call signatures for these two must be
 * different.
 * @param reducer The reducer function to combine the values after each call.
 */
export declare function makeRecursive<T>(initial: T, fn: MapFunction<T>, reducer: ReduceFunction<T>): {
    (): T;
    (args_0: any, ...args_1: any[]): RecursiveFunction<T>;
};
export {};
