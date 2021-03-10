function call(num) {
    var number = 0;
    for (var i = 0; i<=num.length; i++) {
        var result = array[i];
        if (number<result) {
            number = result;
        }
    }
    return number;
}
var array = [23, 4, 54, 23, 574, 56, 76];
var output = call(array);
console.log(output);


