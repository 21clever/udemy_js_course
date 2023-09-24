"use strict";
// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
// Первое число - это база, второе число - это сколько раз нужно будет повторить это 
// число в прогрессии. (Смотри пример ниже). Функция должна возвращать 
// строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, 
// разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто 
// первый аргумент. (Проверяем через оператор typeof)


// function getMathResult(firstnum, secondnum) {
//     if(typeof(secondnum) != 'number' || secondnum <= 0){
//         return firstnum;
//     }
//     let str = '';
//     for(let i = 1; i <= secondnum; i++){
//         if(i === secondnum) {
//             str += `${firstnum * i}`

//         } else {
//             str += `${firstnum * i}---`
//         }
//     }
//     return str;
// }

// console.log(getMathResult(4, 5))






// function getMathResult(firstnum, secondnum) {
//     if(typeof(secondnum) != 'number' || firstnum <= 0){
//         return firstnum;
//     }
//     let str = '';
//     for (let i = 1; i <= secondnum; i++){
//         if(secondnum === i){
//             str += `${firstnum * i}`;   
//         } else {
//             str += `${firstnum * i}---`;
//         }
//     }
//     return str;
// }
// console.log(getMathResult(1, 5))





// Место для третьей задачи
function getMathResult(num, alt) {
    if(typeof(alt) != 'number'|| alt <= 0){
        return num;
    }
    let result = '';
    for(let i = 1; i <= alt; i++){
        if(alt === i) {
            result += `${num * i}`;
        } else {
              result += `${num * i}---`;
        }
    }
    return result;
}

console.log(getMathResult(1, 5))
