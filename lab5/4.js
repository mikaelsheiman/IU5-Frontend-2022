/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add)
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

 function memoize(func) {
    let result // Магия (работает так, как ты захочешь)
    /*
    Возможно, это работает потому, что в момент выполнения функции memorize для неё создается
    "контекст", в котором хранится result, и поскольку ссылка на result остается в возвращенной
    функции memorized, этот контекст остается в памяти, и сборщик мусора его не трогает. И так
    происходит для каждого вызова memorize, поэтому можно создавать несколько memorized объектов,
    которые не будут конфликтовать.  
    */
    return (...args) => {
        cache = true;
        if (result != func(...args)) {
            result = func(...args);
            cache = false;
        }
        return { 'cache': cache, 'result': result }
    }
}

module.exports = memoize;
