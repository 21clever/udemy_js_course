'use strict'
const test = {
  name: 'Alexandr',
  age: 18,
  girlfriend: {
    have: true,
    married: 'not'
  }
 
}
for(let key in test){
  if(typeof(test[key]) === 'object'){
    for(let i in test[key]){
    console.log(`Свойство ${i} означает: ${test[key][i]}`)
    }
  } else {
    console.log(`Свойство ${key} означает: ${test[key]}`)
  }
}






// console.log(Object.keys(options).length);
// console.log(options.name);

// for(let key in options){
//   if(typeof(options[key]) === 'object'){
//     for(let i in options[key]) {
//       console.log(`Cвойство ${i} имеет такое значение ${options[key][i]}`)
//     }
//   } else {
//     console.log(`Cвойство ${key} имеет такое значение ${options[key]}`)
//       }
// }


const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function (plan){
    let {age} = plan;
    let {languages} = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function(lang) {
        str += `${lang.toUpperCase()} `;
        
    });
    return str;
} 
};

function showExperience(plan) {
  const {exp} = plan.skills;
return exp;

}
console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
let str = '';
const {programmingLangs} = plan.skills;
for(let key in programmingLangs){
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
     return str;
}
console.log(showProgrammingLangs(personalPlanPeter));

