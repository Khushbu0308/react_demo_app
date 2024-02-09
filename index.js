console.log(typeof null);  // object
console.log(typeof undefined);  // undefined
console.log(typeof NaN);  //number
console.log(typeof { a: 1 }) //object
console.log(typeof [1, 2, 4])  // object

let add = function (a, b) {   // anonymous function is function which has no name
    return a + b;
}
let result = add(5, 3);
console.log(result);

//  find method returns the first array element that passes a certain test function.
//  find method doesnot change the original array and 
// The method find() returns undefined if none of the elements in the array passes the test.

let number = [12, 16, 18, 20, 22];
let data = number.find(element => element > 20);
let data1 = number.find(element => element >= 20);
let data2 = number.find(element => element >= 25);
console.log(data);
console.log(data1);
console.log(data2);
console.log(number);

// findIndex returns the first array element index that passes a certain test function.
//The method findIndex() returns -1 if none of the elements in the array passes the test.
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
const isLargeNumber1 = (element => element > 140);
console.log(array1.findIndex(isLargeNumber));
console.log(array1.findIndex(isLargeNumber1));
console.log(array1)
