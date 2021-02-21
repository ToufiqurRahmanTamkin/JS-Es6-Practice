var name = 'Tamkin';

function add(num1, num2) {
    var result = num1 + num2;
    console.log('result inside', result, name);

    function double(num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}
var sum = add(10, 15);
console.log(sum);