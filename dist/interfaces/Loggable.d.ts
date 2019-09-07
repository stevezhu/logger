export interface Loggable<T> {
    toLoggableObject(): T;
}
export declare function isLoggable(object: any): object is Loggable<any>;
