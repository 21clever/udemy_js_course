"use strict";

// for(let i = 0; i < 3; i++){
//     console.log(i);
//     for(let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }




// *
// **
// ***


// let result = '';
// const length = 3;
// for(let i = 1; i <= length; i++){
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);


// first: for(let i = 0; i <= 3; i++){
//     console.log(`First level: ${i}`);
//         for(let j = 0; j < 3; j++){
//             console.log(`Second level: ${j}`);
//             for(let k = 0; k < 3; k++){
//                 if(k === 2) continue first;
//                 console.log(`Third level: ${k}`);
//             }
//     }
// }


// var step;
// for (step = 0; step < 5; step++) {
//   // Запускается 5 раз, с шагом от 0 до 4.
//   console.log("Идём 1 шаг на восток");
// }


 


// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке 
// (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл.

for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }

    function fourthTask() {
        let i = 2;
        while(i <= 16) {
           
           if (i % 2 === 0) {
                 i++;
                console.log(i);
                continue;
        } else {
            console.log(fourthTask); 
       
        }
     
    } 
    i++;
}