// A shallow copy creates a new object that has the same properties as the original object,
//  but the new object references the same values as the original object.
// This means that if you change a property of the new object,
//  you will also change the property of the original object.

const obj1 = {
    firstName: "Khushbu",
    lastName: "Rani"
}
const obj2 = obj1;
console.log(obj2.firstName)

// A deep copy creates a new object that has the same properties as the original object, 
// but the new object has its own copies of the values.
//  This means that if you change a property of the new object,
//   you will not change the property of the original object.

const obj3 = {
    firstName: "Anu",
    lastName: "Dull"
}
const obj4 = JSON.parse(JSON.stringify(obj3));
console.log(obj4)
console.log(obj4.firstName)

// When to use shallow copy and deep copy
// Shallow copy is useful when you want to create a new object that has the same properties as the original object, but you do not need to keep the two objects in sync.For example, you might use a shallow copy to create a new object that you will use to pass to a function.
// Deep copy is useful when you want to create a new object that has the same properties as the original object, and you need to keep the two objects in sync.For example, you might use a deep copy to create a new object that you will use to store the state of your application.

