/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b: 2})() -> 3
 */

function customBind(f, context) {
  return function(...args) {
    const uniqId = Date.now().toString()

    context[uniqId] = f

    const result = context[uniqId](...args)

    delete context[uniqId]

    return result
  }
}

module.exports = customBind;
