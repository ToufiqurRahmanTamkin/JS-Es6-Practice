const person = {
    name: 'Tamkin',
    age: 25
}
const data = JSON.stringify(person);
console.log(data.name);


// JSOn convert back and front
const person2 = {
    name: 'rahman',
    age: 35
}
const data2 = JSON.stringify(person2);
const dataParsed = JSON.parse(data2);
console.log(dataParsed.name);


// local storage

// localStorage.setItem('userId', 1250);