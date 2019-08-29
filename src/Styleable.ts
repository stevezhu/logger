import { Loggable } from './Loggable'

export interface Styleable<T> extends Loggable<T> {
  style: string
}
