import { Loggable } from './Loggable';
/**
 * An interface for `Loggable` objects that can be styled when logged.
 */
export interface Styleable<T> extends Loggable<T> {
    style: string;
}
/**
 * Create a `Styleable` object where the loggable object is static.
 * @param obj The object to return in `toLoggableObject`.
 * @param style The style of the object when logged.
 */
export declare function createStyleable<T>(obj: T, style?: string): Styleable<T>;
