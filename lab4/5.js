/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    
    while (str.includes('[]') || str.includes('()') || str.includes('<>')) {
        str = str.replaceAll('[]', '')
        str = str.replaceAll('()', '')
        str = str.replaceAll('<>', '')
    }

    if (str) return false
    else return true
}

module.exports = checkBrackets;
