console.log(typeof null);  // object
console.log(typeof undefined);  // undefined
console.log(typeof NaN);  //number

console.log(typeof { a: 1 }) //object
console.log(typeof [1, 2, 4])  // object

let add = function (a, b) {   // anonymous function is function which has no name
    return a + b;
}
let result = add(5, 3);
console.log(result)