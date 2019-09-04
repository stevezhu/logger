import { Styleable } from './interfaces/Styleable'
import { makeRecursive } from './makeRecursive'

/**
 * The output of the tag function and the input for `console.log`.
 */
type LogInput = [string, ...any[]]

export function logstyle(
  strs: TemplateStringsArray,
  ...vals: Styleable<any>[]
): LogInput {
  const [initial, ...remaining] = strs

  let message: string = initial
  const substitutions: any[] = []
  for (const [i, val] of vals.entries()) {
    if (val.style == '') {
      message += '%s'
      substitutions.push(val.toLoggableObject())
    } else {
      message += '%c%s%c'
      substitutions.push(val.style, val.toLoggableObject(), '')
    }
    message += remaining[i]
  }
  return [message, ...substitutions]
}

export const logstyleRecursive = makeRecursive(
  [''],
  logstyle,
  (
    [aInitial, ...aRemaining]: LogInput,
    [bInitial, ...bRemaining]: LogInput,
  ): LogInput => {
    const ret: LogInput = [aInitial + bInitial]
    ret.push(...aRemaining)
    ret.push(...bRemaining)
    return ret
  },
)
