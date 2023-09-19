"use strict";

// const obj = {
//     name: 'Ivan',
//     age: 18,
//     earning: {
//            cash: 1200
//     }
// }

// obj.name = 'Alexey';
// console.log(obj.name);


// const arr = ['Alex', 18, 'Chinnik']
// arr[3] = 'Love Mary';
// console.log(arr[3]);


let name = 'Как вас зовут?',
    age = 'Сколько вам лет?',
    from = 'Откуда вы?';

let result = prompt(`Ответьте на вопрос ${name}`, '');
let result = prompt(`Ответьте на вопрос ${age}`, '');
let result = prompt(`Ответьте на вопрос ${from}`, '');

console.log(result);
