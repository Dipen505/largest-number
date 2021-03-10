function largestNumber(num) {
    var number = 0;
    var length = num.length;
    for (var i = 0; i<=length; i++) {
        var result = array[i];
        if (number<result) {
            number = result;
        }
    }
    return number;
}
var array = [23, 4, 54, 23, 574, 56, 76]; // This is array
var output = largestNumber(array);
console.log(output);


