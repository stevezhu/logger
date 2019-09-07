function isNonEmptyArray(array) {
    return array.length != 0;
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
export function makeRecursive(initial, fn, reducer) {
    function reduce(accumulator, ...args) {
        return isNonEmptyArray(args)
            ? createRecursiveFn(reducer(accumulator, fn(...args)))
            : accumulator;
    }
    function createRecursiveFn(accumulator) {
        function fnRec(...args) {
            return isNonEmptyArray(args)
                ? reduce(accumulator, ...args)
                : reduce(accumulator);
        }
        return fnRec;
    }
    return createRecursiveFn(initial);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZVJlY3Vyc2l2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlUmVjdXJzaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLFNBQVMsZUFBZSxDQUFDLEtBQVk7SUFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTtBQUMxQixDQUFDO0FBdUJEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsT0FBVSxFQUNWLEVBQWtCLEVBQ2xCLE9BQTBCO0lBTzFCLFNBQVMsTUFBTSxDQUNiLFdBQWMsRUFDZCxHQUFHLElBQTZCO1FBRWhDLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQztZQUMxQixDQUFDLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxXQUFXLENBQUE7SUFDakIsQ0FBQztJQUVELFNBQVMsaUJBQWlCLENBQUMsV0FBYztRQUd2QyxTQUFTLEtBQUssQ0FBQyxHQUFHLElBQTZCO1lBQzdDLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDekIsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVELE9BQU8saUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbkMsQ0FBQyJ9