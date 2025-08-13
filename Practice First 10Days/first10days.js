//! They follow the actual Day 1–10 topics as listed in the repository: Introduction, Data Types, Booleans/Operators/Date, Conditionals, Arrays, Loops, Functions, Objects, Higher-Order Functions, Sets & Maps

//? QUESTIONS :

//1 - Create a variable with your birth year and calculate your current age using the current date.
// If your age is an even number, print "Even Age", otherwise "Odd Age".

//? Answer :

const birthYear = 1991;
const currentYear = new Date().getFullYear();

const age = currentYear - birthYear;

if (age % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

//2 -  Given the array:

// [2, 5, 8, 11, 14]

//  Write a function that:
// a. Squares each number

const arr = [2, 5, 8, 11, 14];

const sqrd = arr.map((num) => Math.pow(num,2));

console.log(sqrd);

// b.Returns only the results greater than 50

const greater = sqrd.filter((num)=> num>50);
console.log(greater);

//3 - Make an object representing a person with properties: name, hobbies (array), and birthYear. 
// Add a method getAge() that calculates the age from birthYear using the current date. Call the method and print the result.



//4 -Create an array of strings with mixed lengths. 
// Use a higher-order function to return a new array of strings that are in uppercase and have more than 4 characters.



//5 -Write code that generates a random number from 1–100.
//  If the number is divisible by both 3 and 5, log "FizzBuzz". 
// If divisible only by 3, log "Fizz". If divisible only by 5, log "Buzz". Otherwise, log the number.



//6 -Make a Map that stores the population of at least 3 countries. 
// Write a function that takes a country name and returns its population or "Not Found".



//7 -Given the array:
//["banana", "apple", "banana", "orange", "apple", "mango"]
//Create a function that returns a list of unique fruits sorted in alphabetical order.





//8 - Create a loop that runs from 1 to 20 and:

// Skips multiples of 4

// Stops the loop entirely if the number is greater than 15

// Logs each remaining number







//9 -Create a function that takes an array of numbers and returns an object with two properties:

// sum → sum of all numbers

//average → average of the numbers

//10 -Create an object representing a library with properties: name and books (array of book titles). Add a method findBooksByLetter(letter) that returns an array of books starting with that letter. Use .filter() inside the method.
