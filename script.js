'use strict';
/*1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в 
нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно 
меняется в зависимости от цифры. 

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки 
на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет 
достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете 
реализовать и полный скрипт, он тоже должен проходить тесты.
Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные" */
// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
    if(typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return 'Ошибка, проверьте данные'
    } 
    const hours = Math.floor(minutesTotal / 60);
    let minuts = minutesTotal % 60;
    
    let hoursStr = '';
    
    switch (hours) {
        case 0: hoursStr = 'часов';
                             break;
         case 1: hoursStr = 'час';
                             break;
            case 2: 
            case 3: 
            case 4: hoursStr = 'часа';
            break;
            default: hoursStr = 'часов';
            
    }
    return `Это ${hours} ${hoursStr} и ${minuts} минут `;
    }
    console.log(getTimeFromMinutes(300));
    