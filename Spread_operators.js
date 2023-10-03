// let a = 10,
//     b = a;
//     b = b + 5;
// console.log(a);
// console.log(b);

// const obj = {
//     a: 5,
//     b: 2
// }
// let copy = obj; // Ссылка
// copy.a = 10;


// function coppy(mainObj) {
//   let objCopy = {};
  
//   for(let key in mainObj){
//     objCopy[key] = mainObj[key];
//   }
// return objCopy;
// }

// const numbers = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     f: 4
//   }
// }

// const newNumbers = coppy(numbers);
// newNumbers.a = 10;
// newNumbers.c.d = 200;

// console.log(numbers);
// console.log(newNumbers);

// const edd = {
//   g: 5,
//   h: 6
// };


// const clone = Object.assign({}, edd);
// clone.d = 20;
// console.log(edd);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[0] = 'G';
// newArray[1] = 'G';
// newArray[2] = 'BRO';

// console.log(oldArray);
// console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wodrpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 8];

log(...num)

const array = ['a', 'b'];

const newAarray = [...array]

const q = {
  one: 1,
  two: 2
}

const newObj = {...q};

console.log(newObj);