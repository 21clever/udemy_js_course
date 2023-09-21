"use strict";

const lines = 5;
let result = ''; //0 - первая итерация 1 - вторая 2 - третья 3 -четвёртая 4 - пятая
for(let index = 0; index < lines; index++) {
    for(let key = 0; key <= index; key++){
        result += '*';
        result += ' ';
    }
    result += '\n';
  

}
console.log(result)


 