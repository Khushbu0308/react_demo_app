// array.splice(start, deleteCount, item1, item2, ...)
const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// months.splice(1, 1, "Feb");
//months.splice(3, 1, 'May');
months.splice(2, 2);
console.log(months);


//slice
//array.slice(begin, end)
// begin: The index at which to begin extraction.
// end (optional): The index at which to end extraction.
//  The end index is not included in the extracted result.
//   If omitted, slice() extracts to the end of the array.
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);
console.log(fruits);

// In summary, 
// slice() extracts a portion of an array without modifying the original array,
//  while 
//  splice() can be used to remove, replace, or add elements to an array in place, 
//  thus modifying the original array.

