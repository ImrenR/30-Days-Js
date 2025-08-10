// if else if else
let weather1 = "sunny";
if (weather1 === "rainy") {
  console.log("You need a rain coat.");
} else if (weather1 === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather1 === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

//* Switch *//
//!Switch is an alternative for if else if else else.
//! The switch statement starts with a switch keyword followed by a parenthesis and code block.
//! Inside the code block we will have different cases.
//! Case block runs if the value in the switch statement parenthesis matches with the case value.
//! The break statement is to terminate execution so the code execution does not go down after the condition is satisfied.
//! The default block runs if all the cases don't satisfy the condition.

//Syntax :

// switch (caseValue) {
//   case 1:
//     // code
//     break;
//   case 2:
//     // code
//     break;
//   case 3:
//     // code
//     break;
//   default:
//   // code
// }

let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

//***************************** EXERCISES - 1 ************************* */

//? 1- Get user input using prompt(“Enter your age:”).
//?... If user is 18 or older , give feedback:...
//?... 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

//! Answer :
// let age= prompt("Enter your age:");
// let number = 18
// if (age > 18){
//   console.log('you are old enough to drive')
// }else
//   console.log(`You are left with ${number-age} years to drive`)

//? 2- Compare the values of myAge and yourAge using if … else.
//?Based on the comparison and log the result to console stating who is older (me or you).
//? Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

//! Answer

// let yourAge = parseInt(prompt('Enter your age:'));
// let myAge = 35;

// if (myAge > yourAge) {
//   console.log(`You are ${myAge - yourAge} older than me.`)

// }else {
//   console.log('I m younger than you')
// };

//? 3- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
//! Answer :

let a = 4;
let b = 3;
 
a > b ? console.log('a is greater than b') : console.log('a is less than b')

//? 4 - Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//   Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

//! Answer : 

// const aNumber = parseInt(prompt("Enter a number : "));

// if (aNumber % 2 === 0) {
//   console.log('The number you entered is even')
// }else {
//   console.log('The number you entered is odd')
// };

//***************************** EXERCISES - 2 ************************* */

//? 1 -Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

//? 2 -Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer.

//? 3 -Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

//***************************** EXERCISES - 3 ************************* */

//? 1 -Write a program which tells the number of days in a month.
// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.
//? 2 -Write a program which tells the number of days in a month, now consider leap year.
