const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);

const evenNumber = [3, 4, 5, 6, 8, 10, 12, 13, 18];
const resEvenNumber = evenNumber.filter((n) => {
    return n % 2 == 0
})
console.log(resEvenNumber);

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resData = data.filter((res) => {
    return res > 4
})

let people = [
    { name: 'Rachel', age: 24 },
    { name: 'David', age: 16 },
    { name: 'Aakash', age: 23 },
    { name: 'Franklin', age: 26 },
    { name: 'Ricky', age: 17 }
];

let adults = people.filter(res => {
    return res.age > 18
})
let adultsAletrnateOption = people.filter(big => big.age >= 18);
console.log(adults);

let evenNumberMap = [3, 4, 5, 6, 8, 10, 12, 13, 18];
evenNumberMap = evenNumberMap.map((n) => {
    if (n % 2 == 0) { return `Odd = ${n}` } else { return `Even = ${n}` }
});
console.log(evenNumberMap);

let evenNumberMapCopy = [3, 4, 5, 6, 8, 10, 12, 13, 18];
evenNumberMapCopy.map((n) => {
    return n * 2
});
console.log(evenNumberMapCopy);

let evenNumberMapCopyFor = [3, 4, 5, 6, 8, 10, 12, 13, 18];
let dataTest = [];
evenNumberMapCopyFor.forEach((n) => {
    dataTest.push(n * 2)
});
console.log(dataTest);

// Tests whether at least one element in the array passes the test implemented by the provided function.
let someData = [2, 4, 5, 6, 7, 8, 10]
someData = someData.some((n) => {
    return n % 2 == 0
})
console.log(someData);
//Tests all the element in the array passes the test implemented by the provided function.
let everyData = [2, 4, 5, 6, 7, 8, 10]
everyData = everyData.every((n) => {
    return n % 2 == 0
})
console.log(everyData);

// Note: We need to learn reduce method in this File.