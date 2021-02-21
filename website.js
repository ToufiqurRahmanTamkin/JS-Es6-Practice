const person = {
    name: 'tamkin',
    age: 15
}

// localStorage.setItem('userId', 12345);
// const userId = localStorage.getItem('userId');
// console.log(userId);

localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const persedPerson = JSON.parse(storedPerson);
console.log(persedPerson.age);


const keys = Object.keys(persedPerson);
console.log(keys);


const values = Object.values(persedPerson)
console.log(values);