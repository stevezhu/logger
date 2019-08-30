import { Loggable } from './Loggable'

export interface Styleable<T> extends Loggable<T> {
  style: string
}

export function createStyleable<T>(obj: T, style: string = ''): Styleable<T> {
  return { toLoggableObject: () => obj, style }
}
