/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    if (str == '') return str

    let first = str[0]
    let first_ind = 0

    let res = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] != first) {
            if (i-first_ind > 1)
                res += (first + (i - first_ind))
            else res += first

            first = str[i]
            first_ind = i
        }
    }

    if(str.length - first_ind > 1)
        res += (first + (str.length - first_ind))
    else res += first

    return res;
}

module.exports = rle;
