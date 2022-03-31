/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
 function getMinMax(str) {

    let max_number = Number.MIN_SAFE_INTEGER;

    let min_number = Number.MAX_SAFE_INTEGER;

    let number_str = '';

    let temp_number = 0;

    for(let i = 0; i < str.length; i++) {

        if (+str[i] || str[i] == '0' || str[i] == '.' || str[i] == '-') {

            number_str += str[i];
        }
        else {

            temp_number = +number_str;

            if (min_number > temp_number) {

                min_number = temp_number;
            }

            if (max_number < temp_number) {

                max_number = temp_number;
            }

            number_str = '';
        }
    }
    return {min: min_number, max: max_number};
}

 
module.exports = getMinMax;
