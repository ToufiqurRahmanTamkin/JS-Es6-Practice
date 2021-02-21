function doSomething() {
    console.log(3333);
}
console.log(2222);
// setTimeout(doSomething, 4000);
console.log(4444);
console.log(5555);

// setTimeout(function() {
//     console.log('lazy');
// }, 4000)

// setTimeout(() => {
//     console.log('see you later...');
// }, 4000)


setInterval(function() {
    console.log('doing it');
}, 1000);