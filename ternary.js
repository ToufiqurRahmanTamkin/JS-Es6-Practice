const money = 150;
// let food;
// if (money > 100) {
//     food = 'biryani';
// } else {
//     food = 'alu r vorta';
// }
// console.log(food);

let food = money > 100 ? 'biryani' : 'alu r vorta';
// console.log(food);


const active = true;
const cssClass = active ? 'active' : 'inactive';
// console.log(cssClass);
// function call shortcut

function displayUser() {

}

function hideUser() {

}

active ? displayUser() : hideUser();

// single condition
active && displayUser();

active || displayUser();

const x = active && 5;
const y = active && 5;
console.log(x);
console.log(y);

// 
const number = +'45'
console.log(number);

// 
const number2 = '45'
console.log(number2);

// 
const numText = 45 + '';
console.log(numText);