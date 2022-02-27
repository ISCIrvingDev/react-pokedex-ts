// https://attacomsian.com/blog/javascript-check-variable-is-object
// function isObject (A) { return A && A.toString() === '[object Object]' }

// const isObject = (obj) => {
//   return Object.prototype.toString.call(obj) === '[object Object]'
// }

import { AppStringUtils } from './app.string-utils'

export const AppObjectUtils = {
  isObject: (val: any): boolean => val && typeof val === 'object',
  toCamelCase: (obj: {}): {} => {
    const newObj: { [key: string]: any } = {}

    for (const [key, value] of Object.entries(obj)) {
      newObj[AppStringUtils.toCamelCase(key)] = Array.isArray(value)
        ? value.map(item => AppObjectUtils.toCamelCase(item))
        : AppObjectUtils.isObject(value)
          ? AppObjectUtils.toCamelCase(value as {})
          : value
    }

    return newObj
  }
}
