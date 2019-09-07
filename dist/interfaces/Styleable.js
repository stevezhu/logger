"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a `Styleable` object where the loggable object is static.
 * @param obj The object to return in `toLoggableObject`.
 * @param style The style of the object when logged.
 */
function createStyleable(obj, style = '') {
    return { toLoggableObject: () => obj, style };
}
exports.createStyleable = createStyleable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R5bGVhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ludGVyZmFjZXMvU3R5bGVhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0E7Ozs7R0FJRztBQUNILFNBQWdCLGVBQWUsQ0FBSSxHQUFNLEVBQUUsUUFBZ0IsRUFBRTtJQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO0FBQy9DLENBQUM7QUFGRCwwQ0FFQyJ9