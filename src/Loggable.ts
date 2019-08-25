export interface Loggable {
  toLoggableObject(): Object
}

export function isLoggable(object: any): object is Loggable {
  return 'toLoggableObject' in object
}
