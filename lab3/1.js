/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
 function capitalize(str) {

    let words_array = str.split(' ')

    for(let i = 0; i < words_array.length; i++) {

        let letters_array = []
        
        letters_array[i] = words_array[i].split('')

        letters_array[i][0] = letters_array[i][0].toUpperCase()

        words_array[i] = letters_array[i].join('')
    }

    return words_array.join(' ')
}

module.exports = capitalize
