// function checkBreckets (str) {
//   const stack = [];
//   const obj = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   }
//   for(let i = 0; i < str.length; i++){
//     const bracket = str[i];
//     if( bracket === '(' || bracket === '['||bracket === '{'){
//       stack.push(bracket);
//     } else {
//       const lastEl = stack.pop();
//       if(bracket !== obj[lastEl]){
//         return false;
//       }
     
//     }
//   }
//     if(stack.push){
//       return false;
//     }  else {return true;}
// }

// Задачка, что бы с массива в консоль выводились только не повторяющееся значения №1
// const arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9];
// function arrRep (array){
//     const uniqueValue = [];
//     for(let i = 0; i < arr.length; i++){
//      const currentItem = array[i];
//      let count = 0;
//             for(let k = 0; k < arr.length; k++){
//               if(currentItem === array[k]){
//                 count++;
//               }
//             } 
//          if(count === 1){
//           uniqueValue.push(currentItem);
//          }

//   }
//   return uniqueValue
// }
// console.log(arrRep(arr));

// Задачка, что бы с массива в консоль выводились только не повторяющееся значения №2
// Будет быстрее работать код, сложность O(n)

const arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9];
function arrRep (array){
    const uniqueValue = [];
    const obj = {

    };
              for(let i = 0; i < arr.length; i++){
              const currentItem = array[i];
              if(!(currentItem in obj)){
                obj[currentItem] = 1;
              } else {
                obj[currentItem] += 1;
              }
            } 
      const keys = Object.keys(obj);
      keys.forEach(key => {
        if(obj[key] === 1){
          uniqueValue.push(key);
        }
      })

}
console.log(arrRep(arr));









