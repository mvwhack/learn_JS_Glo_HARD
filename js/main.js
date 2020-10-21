'use strict';
let arr = ['12', '27', '755', '104', '47', '28', '377'];

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});



// Решение взял с learn.javascript.ru
let n = 100;

nextPrime:
  for (let i = 2; i <= n; i++) { // Для всех i...

    for (let j = 2; j < i; j++) { // проверить, делится ли число..
      if (i % j === 0) {
        continue nextPrime;
      } // не подходит, берём следующее
    }

    console.log( i + ' - Делители этого числа: 1 и ' + i); // простое число
  }