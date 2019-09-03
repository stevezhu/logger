/**
 * An array with at least one element.
 */
type NonEmptyArray<T> = [T, ...T[]]

function isNonEmptyArray(array: any[]): array is NonEmptyArray<any> {
  return array.length != 0
}

/**
 * A function that reduces two values into a single value.
 */
type ReduceFunction<T> = (a: T, b: T) => T

/**
 * A function that is run on the args each time the recursive function is
 * called.
 */
type MapFunction<T> = (...args: NonEmptyArray<any>) => T

/**
 * A function that returns the final value if no arguments are given. Or
 * otherwise returns another recursive function if at least one argument is
 * given.
 */
type RecursiveFunction<T> = {
  (): T
  (...args: NonEmptyArray<any>): RecursiveFunction<T>
}

/**
 *
 * @param initial The initial value of the accumulator.
 * @param fn The input type for this function must have at least one argument
 * because the final evaluation call for the returned recursive function is
 * defined by having no arguments. The call signatures for these two must be
 * different.
 * @param reducer The reducer function to combine the values after each call.
 */
export function makeRecursive<T>(
  initial: T,
  fn: MapFunction<T>,
  reducer: ReduceFunction<T>,
) {
  function reduce(accumulator: T): T
  function reduce(
    accumulator: T,
    ...args: NonEmptyArray<any>
  ): RecursiveFunction<T>
  function reduce(
    accumulator: T,
    ...args: [] | NonEmptyArray<any>
  ): T | RecursiveFunction<T> {
    return isNonEmptyArray(args)
      ? createRecursiveFn(reducer(accumulator, fn(...args)))
      : accumulator
  }

  function createRecursiveFn(accumulator: T) {
    function fnRec(): T
    function fnRec(...args: NonEmptyArray<any>): RecursiveFunction<T>
    function fnRec(...args: [] | NonEmptyArray<any>): T | RecursiveFunction<T> {
      return isNonEmptyArray(args)
        ? reduce(accumulator, ...args)
        : reduce(accumulator)
    }
    return fnRec
  }

  return createRecursiveFn(initial)
}
