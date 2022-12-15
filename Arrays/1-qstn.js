// Write a program to reverse an array or string
/**
 *  Input  : arr[] = {1, 2, 3}
    Output : arr[] = {3, 2, 1}
 */

/**
 * !Solution 01 - Built in method
 */

let numbers_array = [1, 2, 3, 4, 5, 6];
console.log(numbers_array);
numbers_array.reverse();
console.log(numbers_array);

/**
 * [ 1, 2, 3, 4, 5, 6 ]
 * [ 6, 5, 4, 3, 2, 1 ]
 */

/**
 * !Solution 02 - using for loop
 */

let reversedArray = [];
for (let i = numbers_array.length - 1; i >= 0; i--) {
	reversedArray.push(numbers_array[i]);
}

console.log('Reversed array: ', reversedArray);
// Reversed array:  [ 1, 2, 3, 4, 5, 6 ]

/**
 * !Solution 03 - using forEach loop
 */

let reversedArray1 = [];
console.log(numbers_array); //[ 6, 5, 4, 3, 2, 1 ]
numbers_array.forEach(element => {
	reversedArray1.unshift(element);
});

console.log(reversedArray1); //[ 1, 2, 3, 4, 5, 6 ]

/**
 * !Solution 04 - using reduce method
 */

let reversedArray2 = [];
console.log('intial', numbers_array); //[ 6, 5, 4, 3, 2, 1 ]
reversedArray2 = numbers_array.reduce((acc, item) => [item].concat(acc), []);
console.log(reversedArray2); //[ 1, 2, 3, 4, 5, 6 ]

/**
 * reduce method take two parameter reduce method and intial value
 */
