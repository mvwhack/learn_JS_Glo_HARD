'use strict';

let num = 266219;
console.log(num.toString().split(''));

let arr = num.toString().split('');
let increase = arr.reduce((sum, current) => sum * current);
console.log('increase: ', increase);

let raising = increase ** 3;
console.log('raising: ', raising);

let newArr = raising.toString();
alert('Первые 2 цифры полученного числа равны: ' + newArr.slice(0,2));




