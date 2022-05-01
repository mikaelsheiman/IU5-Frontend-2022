/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */


function getAnagramms(arr) {

    multisets = arr.map((element)=> 
        element.split('').map(x=>x.toLowerCase()).sort().join('')
    )

    let set = new Set(multisets)
    let res = []

    for (const key of set) {
        let anagramms = []
        for (let i = 0; i < arr.length; i++){
            if(multisets[i]==key) {
                anagramms.push(arr[i])
            }
        }
        res.push(anagramms)
    }

    return res
}

getAnagramms(['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп'])

module.exports = getAnagramms;
