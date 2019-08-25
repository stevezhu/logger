export interface Loggable<T> {
  toLoggableObject(): T
}

export function isLoggable(object: any): object is Loggable<any> {
  return 'toLoggableObject' in object
}
