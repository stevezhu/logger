"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function makeRecursive(initial, fn, reducer) {
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
exports.makeRecursive = makeRecursive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZVJlY3Vyc2l2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlUmVjdXJzaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsU0FBUyxlQUFlLENBQUMsS0FBWTtJQUNuQyxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFBO0FBQzFCLENBQUM7QUF1QkQ7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixhQUFhLENBQzNCLE9BQVUsRUFDVixFQUFrQixFQUNsQixPQUEwQjtJQU8xQixTQUFTLE1BQU0sQ0FDYixXQUFjLEVBQ2QsR0FBRyxJQUE2QjtRQUVoQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsV0FBVyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxTQUFTLGlCQUFpQixDQUFDLFdBQWM7UUFHdkMsU0FBUyxLQUFLLENBQUMsR0FBRyxJQUE2QjtZQUM3QyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pCLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ25DLENBQUM7QUEvQkQsc0NBK0JDIn0=