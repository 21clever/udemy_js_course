"use strict";
/*Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
Пример:
getCoupeNumber(33)  => 9
getCoupeNumber(7)  => 2
getCoupeNumber(300)  => "Таких мест в вагоне не существует" */


function getCoupeNumber(seatNumber) {
   
    if ( typeof(seatNumber) !== 'number' || seatNumber < 0 ||!Number.isInteger(seatNumber)){
        return 'Ошибка. Проверьте правильность введенного номера места';
    }            if (seatNumber === 0 || seatNumber > 36 ) { 
                "Таких мест в вагоне не существует"
            }
            return Math.ceil(seatNumber / 4)
}
console.log(getCoupeNumber(32));






