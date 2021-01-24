//создать регулярного выражения

// 1 вариант - литерал
const re1 = /ab+c/;

// конструктор RegExp
const re2  = new RegExp('ab+c');

//с флагом чуввствительности к регуляности к регистру (i)
//i - независимость от регистра
//g - ищет все совпадения иначе только 1 совпадени
//m - многострочный режим

const re3 = /ab+c/i;
const re4 = new RegExp('ab+c', 'i');

let str1 = 'asdasdabcadasdbc';

// проверка

console.log('re.test:');
console.log(re1.test(str1));
console.log('re.exec:');
console.log('re1.exec(str1');

/*
* task 1. Написать функцию, которая очищает строку от всех не буквенно-цифровых символов
* Пример, "This., -/ is #! a ; : {} to $ % ^ & * book" ; преобразуется "This is a book"
*/
const str11 = 'This., -/ is #! a ;: {} to $ % ^ & * book';
// string метод replace
function deleteSymbols(str){
    return str.replace(/[^a-zA-Z0-9]+/g,' ');
}

console.log(deleteSymbols(str11));

/* * task 2. Написать функцию для проверки спама в переданной строке.
* Функция возвращет true, если строка содержи
* Функция должна быть нечувствительна к регистру.
* */

let re5 = /100% бесплатно |увеличение продаж| только сегодня| не удаляйте| xxx/i;
console.log(spamCheck(re5, 'dkajldjalkfjdlkjfdsadsjere 100% бесплатновоалвдапа продаж вапа'));

function spamCheck(regexp, str){
    return regexp.test(str);
}

/* task3
'sdfsdfsdfsd 1.12.123'
 */

let str12 = 'sdfsdfsdfsd 1.12.123 122.122.123 11.12.123';
let re6 = /\d{1,3}.\d{1,3}\.\d{1,3}/;
console.log(str12.match(re6));