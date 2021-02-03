const user = {
    id: 145,
    name: "Tamkin",
    lover: {
        name: 'Jamila',
        favFood: 'pizza'
    },
    friendAge: [12, 45, 56],
    friends: ['kamal', 'jamal', 'samal']
};
const userJSON = JSON.stringify(user);
// {"id":145,"name":"Tamkin"}
console.log(userJSON);
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);