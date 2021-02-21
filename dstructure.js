// const friends = ['sakib', 'arman', 'amir', 'salman', 'sahrukkhan'];
// const [chotoFriend, ...olderFriend] = friends;
// console.log(olderFriend);
// console.log(chotoFriend);


// const person = {
//     name: 'jack william',
//     age: 25,
//     job: 'facebooker',
//     gName: 'ema watson',
//     phone: '01715000000',
//     salary: 50000,
//     address: 'dhaka'
// };

// const { name } = person;
// console.log(name);

// const { age } = person;
// console.log(age);

// const { job } = person;
// console.log(job);

// const { gName } = person;
// console.log(gName);

// const { phone } = person;
// console.log(phone);

// const { salary } = person;
// console.log(salary);

// const { address } = person;
// console.log(address);


// const complesObject = {
//     name: 'abc',
//     info: {
//         address: 'kolabagan',
//         leader: 'tiger leader'
//     }
// }

// const { leader } = complesObject.info;

// console.log(leader);

// array dstructure
// const numbers = [45, 19, 100, 587, 4];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// const [x, y] = [54, 92];
// const [x, y] = numbers;
// console.log(x, y);
// function boxify(num1) {
//     return [num1, num1 + 5];
// }
// const box = boxify(8);
// console.log(box);

// const [box1, box2] = boxify(8);
// console.log(box1, box2);

const { name, age } = {
    id: 1,
    money: 25000,
    name: 'Rahim',
    age: 25
}
// const { money } = person;
// console.log(name, age);
// console.log(name, age);
// console.log(money);

const x = 25;
const y = 35;
const obj = { x: x, y: y };
const obj2 = { x, y };
console.log(obj2);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [...numbers, 105];
console.log(newNumbers);