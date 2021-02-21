const normalPerson = {
    firstname: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullname: function() {
        console.log(this.firstname, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        // console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);

const heroPerson = {
    firstname: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstname: 'Hero',
    lastName: 'Golam',
    salary: 25000
}
normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(4000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
heroChargeBill(20000);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [5000, 500, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 500, 40]);
console.log(heroPerson.fun);

fun = {
        name: 'alice'
    }
    // var fu