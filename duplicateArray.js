const data = ["mango", "apple", "grapes", "mango", "grapes", "guava", "orange"];
function removeDuplicateArray(data) {
    return [... new Set(data)];
}
console.log(removeDuplicateArray(data));

// Sets are a new object type with ES6(ES2015) that allows you to create collections of unique values.

