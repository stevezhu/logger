export interface Loggable<T> {
  toLoggableObject(): T
}

export function isLoggable(object: any): object is Loggable<any> {
  return (
    object != null && (object as Loggable<any>).toLoggableObject != undefined
  )
}
