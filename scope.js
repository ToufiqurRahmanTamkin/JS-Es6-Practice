function sum(first, second) {
    let result = first + second;
    if (result > 9) {
        var mode = 'happy';
    }
    console.log(mode);
    return result;
}
const output = sum(3, 7);
// console.log(output);