const friends = ['sakib', 'arman', 'amir', 'salman', 'sahrukkhan'];
const [chotoFriend, ...olderFriend] = friends;
console.log(olderFriend);
console.log(chotoFriend);


const person = {
    name: 'jack william',
    age: 25,
    job: 'facebooker',
    gName: 'ema watson',
    phone: '01715000000',
    salary: 50000,
    address: 'dhaka'
};

const { name } = person;
console.log(name);

const { age } = person;
console.log(age);

const { job } = person;
console.log(job);

const { gName } = person;
console.log(gName);

const { phone } = person;
console.log(phone);

const { salary } = person;
console.log(salary);

const { address } = person;
console.log(address);


const complesObject = {
    name: 'abc',
    info: {
        address: 'kolabagan',
        leader: 'tiger leader'
    }
}

const { leader } = complesObject.info;

console.log(leader);