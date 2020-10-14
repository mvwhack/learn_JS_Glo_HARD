'use strict';

function check(str) {
  if (typeof str !== 'string') {
    alert('аргумент не строка');
    return;
  }

  str = str.trim(); 
  return str.length > 30 ? str.slice(0, 30) + '...' : str;
}

let string = prompt('Введите небольшой кусок текста');
console.log(check(string));