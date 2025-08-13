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

//*****************************  Exercises: Level 3  *******************************************************/

//******************************************************************************************************** */

const countries = ['Finland', 'Sweden', 'Norway']
//? 1-How many languages are there in the countries object file.

//? 2-*** Use the countries data to find the 10 most spoken languages:

   // Your output should look like this
  //  console.log(mostSpokenLanguages(countries, 10))
  //  [
  //    { English: 91 },
  //    { French: 45 },
  //    { Arabic: 25 },
  //    { Spanish: 24 },
  //    { Russian: 9 },
  //    { Portuguese: 9 },
  //    { Dutch: 8 },
  //    { German: 7 },
  //    { Chinese: 5 },
  //    { Swahili: 4 },
  //    { Serbian: 4 }
  //  ]

  // Your output should look like this
  // console.log(mostSpokenLanguages(countries, 3))
  // [
  // {English:91},
  // {French:45},
  // {Arabic:25}
  // ]
