"use strict";

'Один из последних просмотреных фильмов?'
'На сколько оценете его?'

const numberOfFilms = prompt('Сколько фильмов вы просмотрели?'); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    acrots: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оценете его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько оценете его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);