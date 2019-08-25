type StyleMap = { [index: number]: string } | string[]

export class ConsoleStyler {
  private styles: StyleMap

  /**
   * @param styles An array or map of styles for each placeholder.
   */
  private constructor(styles: StyleMap) {
    this.styles = styles
  }

  /**
   * [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
   * @param strs The array of intermediary strings.
   * @param vals The array of objects to be styled.
   * @returns An args array that should be passed to `console.log` using the
   * spread operator.
   */
  private tagFn(strs: TemplateStringsArray, ...vals: any[]) {
    const [initialStr, ...remainingStrs] = strs

    let msg = initialStr
    const substArr = []
    for (const [i, val] of vals.entries()) {
      if (this.styles[i]) {
        /**
         * Always use `%s` to format because the value may be a function, in
         * which case the `toString` function needs to be evaluated each time.
         *
         * Push an empty string at the end to reset the style.
         */
        msg += '%c%s%c'
        substArr.push(this.styles[i], val, '')
      } else {
        msg += '%s'
        substArr.push(val)
      }

      msg += remainingStrs[i] // concat the intermediary string
    }
    return [msg, ...substArr]
  }

  /**
   * @param styles
   * @returns A tag function that styles text for the browser console using the
   * given styles.
   */
  static createTagFunction(styles: StyleMap) {
    return new ConsoleStyler(styles).tagFn
  }
}
