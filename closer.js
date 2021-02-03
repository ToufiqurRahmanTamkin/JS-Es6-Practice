function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const colck2 = stopWatch();
console.log(colck2());
console.log(colck2());
console.log(clock1());
console.log(clock1());