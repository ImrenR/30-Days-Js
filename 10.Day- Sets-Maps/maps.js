//*****************************  Exercises: Level 1  *******************************************************/

//******************************************************************************************************** */



//? 1-create an empty set

const mySet = new Set();

console.log(mySet); // Output: Set(0) {}

//? 2-Create a set containing 0 to 10 using loop

const mySet1 = [];
for ( let i = 0; i< 11; i ++){
    mySet1.push(i);
}
console.log(mySet1);

//? 3-Remove an element from a set

const removedSet = mySet1.pop();
console.log(mySet1);

//? 4-Clear a set





//? 5-Create a set of 5 string elements from array

const fruits = ["apple", "banana", "orange", "mango", "kiwi"];

// Create a set from the array
const fruitSet = new Set(fruits);

console.log(fruitSet);
// Output: Set(5) {"apple", "banana", "orange", "mango", "kiwi"}

//? 6-Create a map of countries and number of characters of a country

const countryMap = new Map([
  ["Turkey", "Turkey".length],
  ["Portugal", "Portugal".length],
  ["Japan", "Japan".length],
  ["Germany", "Germany".length]
]);

console.log(countryMap);
//*****************************  Exercises: Level 2  *******************************************************/

//******************************************************************************************************** */

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


//? 1-Find a union b

const union = [...a];
for ( let i = 0; i < b.length; i++){
  if(!union.includes(b[i])) {
    union.push(b[i]);
  }
}

console.log(union);

