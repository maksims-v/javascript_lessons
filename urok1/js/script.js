"use strict";

let numberOfFilms;

// function start(){
//    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
// }

// start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actros: {},
   genres: [],
   privat: false
};

// function rememberMyFilms(){
//    for (let i = 0; i < 2; i++){
//       const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//       if (a != null && b != null && a != '' && b != '' && a.length < 50){
//          personalMovieDB.movies[a]=b;
//          console.log('Done!');
//       }else{
//          console.log('Error');
//          i--;
//       }
//    }
// }

// rememberMyFilms();

// function detectPersonalLevel(){
//    if(personalMovieDB.count < 10){
//       console.log('Просмотрено довольно мало фильмов');
//    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//       console.log('Вы классический зритель');
//    }else if (personalMovieDB.count >= 30){
//       console.log('Вы киноман');
//    }else{
//       console.log('Произошла ошибка');
//    }
// }

// detectPersonalLevel();

// function showMyDb(hidden){
//    if (!hidden){
//       console.log(personalMovieDB);
//    }
// }

// showMyDb(personalMovieDB.privat);

function writeYourGenres(){
   for (let i = 1; i <= 3; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

writeYourGenres();

console.log(personalMovieDB);



// const num = 22;

// switch(num){
//    case 50:
//       console.log('Не верно');
//       break;
//    case 21:
//       console.log('верно');
//       break;
//    default:
//       console.log('такого нету');
//       break;
// }1

// do {
//    const a = prompt('Один из последних просмотренных фильмов?', '');
//    const b = prompt('На сколько оцените его?', '');
// }


// a.length < 5 && b.length < 5 && a != null && b != null

// function calc(a, b){
//    return (a * b);
// }

// console.log(calc(5, 9));