"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

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



    


    for(let i = 0; i < 2; i++){
        const a = prompt ('Один из последних просмотренных фильмов?', ''),
              b = prompt ('На сколько оцените его?', '');


        if(a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50){
        console.log('done');
        personalMoviesDB[a] = b;

     } else {
        console.log('error');
            i--;
     }
}






    console.log(personalMoviesDB);

