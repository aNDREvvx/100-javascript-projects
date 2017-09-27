const data = require('../../data/arraysOfArrays.js');

/*
 * sum
 *
 * A recursive function that adds up all of the numbers
 * in an array, and all the numbers in a sub-array.
 *
 * Returns the sum of a set of numbers, as a number.
 */

// start with simple array
// const foo = [ 1, 2, 3, 4 ]; // 10
// const foo = [ 1, [ 2, 3, 4, 5, [ 6, 7, 8 ] ] ]; // 36
// can we use map here? do something to every item but get back a single number
// better: reduce - get a single value back, cumulatively

// at each index of the array
// in the first array, array[0]
// +add number to aggregator
// then go to the next array[N]
// until array[N] > array[0].length

var sum = 0;

const calculateSum = function(param) {

    param.forEach((elem) => {
        console.log("elem is " + elem + " — isArray(elem) is " + Array.isArray(elem));

        // check to see if elem (the item being iterated over) is an array
        if(Array.isArray(elem) === false) {
            sum += elem;
            console.log("now the sum is " + sum);
            // if it IS NOT: add it to the accumulator (sum)
            // if it IS: call function recursively to see if elem is an array...
            // outside of the for each!
        } else {
            console.log("i must be an array");
            calculateSum(elem);
        }
    });

    return sum;
}

// console.log(calculateSum());
calculateSum(data);

module.exports = { calculateSum };
