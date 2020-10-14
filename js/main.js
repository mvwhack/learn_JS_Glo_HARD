'use strict';

let lang = prompt('Введите язык ru или en');

if (lang === 'ru'){
    alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en'){
    alert('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
} else if (lang !== 'ru' && lang !== 'en'){
    alert('Ошибка, вы ввели что то другое');
}


let lang2 = prompt('Введите язык ru или en');

switch (lang2) {
  case 'ru':
    alert( 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье' );
    break;
  case 'en':
    alert( 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday' );
    break;
  default:
    alert( 'Ошибка, вы ввели что то другое' );
}


let lang3 = prompt('Введите язык ru или en');

let weekday = [
    ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    ['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'],
    ['Ошибка, вы ввели что то другое']
];

let message = (lang3 === 'ru') ? weekday[0] :
  (lang3 === 'en') ? weekday[1] : weekday[2];

alert( message );


let namePerson = prompt('Введите имя (Например Артем)');
let message2 = (namePerson === 'Артем') ? 'Директор' :
  (namePerson === 'Максим') ? 'Преподователь' : 'Студент';

console.log( message2 );