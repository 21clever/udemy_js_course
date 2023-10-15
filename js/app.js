"use strict";

let numberOfFilms;
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
      personalMoviesDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
      while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
      }
  },
  rememberMyFilms: function (){
    for(let i = 0; i < 2; i++){
        const a = prompt ('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt ('На сколько оцените его?', '').trim();


        if(a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50){
        console.log('done');
        personalMoviesDB[a] = b;

     } else {
        console.log('error');
            i--;
     }
    }
},
showMyDB: function (hidden) {
  if(!hidden) {
      console.log(personalMoviesDB);
  }
},

detectPersonalLevel: function () {
  if (personalMoviesDB.count <= 10){
      console.log('Просмотрено довольно мало фильмов')
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log('Вы классический зритель')
  } else if (personalMoviesDB.count >= 30) {
      console.log('Вы киноман');
  } else {
      console.log('error');
      i--;
  }
},

toggleVisibleMyDB: function(){
  if(personalMoviesDB.privat){
     personalMoviesDB.privat = false;
  } else {
    personalMoviesDB.privat = true;
  }
},
  writeYourGenres: function () {
   
    for(let answ = 1; answ < 2; answ++){
    //   const genre = prompt(`Ваш любимый жанр под номером ${answ}?`);
    //   if(genre === '' || genre === null){
    //     console.log('Вы ввели некорректные данные');
    //     i--;
    //   } else {
    //     personalMoviesDB.genres[answ - 1] = genre;
    //   }
    
    const genres = prompt(`Введите ваши любимые жанры через запятую`);
    if(genres === '' || genres === null){
          console.log('Вы ввели некорректные данные');
          i--;
        } else {
          personalMoviesDB.genres = genres.split(', ');
          personalMoviesDB.genres.sort();
        }
    
  }
    personalMoviesDB.genres.forEach((item, i) => {
     console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  }
}

