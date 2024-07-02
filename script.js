let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']
// pop: Removes the last element from an array.

javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
fruits.pop();
console.log(fruits); // ['apple', 'banana']
// shift: Removes the first element from an array.

javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
fruits.shift();
console.log(fruits); // ['banana', 'orange']
// unshift: Adds one or more elements to the beginning of an array.

javascript
Copy code
let fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange']
// splice: Adds/removes elements from an array.

javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'kiwi');
console.log(fruits); // ['apple', 'kiwi', 'orange']
// slice: Returns a shallow copy of a portion of an array.

javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
let citrus = fruits.slice(1, 3);
console.log(citrus); // ['banana', 'orange']
// concat: Merges two or more arrays.

javascript
Copy code
let fruits = ['apple', 'banana'];
let vegetables = ['carrot', 'lettuce'];
let food = fruits.concat(vegetables);
console.log(food); // ['apple', 'banana', 'carrot', 'lettuce']
// forEach: Executes a provided function once for each array element.

javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// map: Creates a new array with the results of calling a provided function on every element in the array.

javascript
Copy code
let numbers = [1, 4, 9];
let roots = numbers.map(function(num) {
  return Math.sqrt(num);
});
console.log(roots); // [1, 2, 3]
// filter: Creates a new array with all elements that pass the test implemented by the provided function.

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens); // [2, 4]
// reduce: Applies a function against an accumulator and each element in the array to reduce it to a single value.

javascript
Copy code
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 10
// find: Returns the value of the first element that satisfies the provided testing function.

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(function(num) {
  return num > 3;
});
console.log(found); // 4
// findIndex: Returns the index of the first element that satisfies the provided testing function.

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
let foundIndex = numbers.findIndex(function(num) {
  return num > 3;
});
console.log(foundIndex); // 3
// includes: Determines whether an array includes a certain value among its entries.

javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
let hasBanana = fruits.includes('banana');
// console.log(hasBanana); // true
// sort: Sorts the elements of an array in place and returns the sorted array.

javascript
Copy code
let fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']
// reverse: Reverses the elements of an array in place.

javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
fruits.reverse();
console.log(fruits); // ['orange', 'banana', 'apple']
// join: Joins all elements of an array into a string.

javascript
Copy code
let fruits = ['apple', 'banana', 'orange'];
let fruitString = fruits.join(', ');
console.log(fruitString); // 'apple, banana, orange'
// every: Tests whether all elements in the array pass the test implemented by the provided function.

javascript
Copy code
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(function(num) {
  return num % 2 === 0;
});
console.log(allEven); // true
// some: Tests whether at least one element in the array passes the test implemented by the provided function.

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
let someEven = numbers.some(function(num) {
  return num % 2 === 0;
});
console.log(someEven); // true