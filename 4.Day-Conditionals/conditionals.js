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

// let grade = parseInt(prompt("enter your score:"))

// switch(true) {
//   case (grade >=80 && grade <= 100 ):
//     console.log('Grade : A');
//     break;
//     case (grade >=70 && grade <= 89 ):
//     console.log('Grade : B');
//     break;
//     case (grade >=60 && grade <= 69 ):
//     console.log('Grade : C');
//     break;
//     case (grade >=50 && grade <= 59 ):
//     console.log('Grade : D');
//     break;
//     case (grade >= 0 && grade <= 49 ):
//     console.log('Grade : F');
//     break;
//     default:
//       console.log('Please enter a valid score')
// }


//? 2 -Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer.
//! Answer : 

function getSeason(month) {
  // Convert input to lowercase for case-insensitive matching
  month = month.toLowerCase();

  if (month === 'september' || month === 'october' || month === 'november') {
    return 'Autumn';
  } else if (month === 'december' || month === 'january' || month === 'february') {
    return 'Winter';
  } else if (month === 'march' || month === 'april' || month === 'may') {
    return 'Spring';
  } else if (month === 'june' || month === 'july' || month === 'august') {
    return 'Summer';
  } else {
    return 'Invalid month';
  }
}

// Example usage:
// const userInput = prompt('Enter a month:');
// const season = getSeason(userInput);
// console.log(`The season is: ${season}`);




//? 3 -Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// const theDay = prompt ('Enter the day:').toLocaleLowerCase();

// if (theDay === 'saturday' || theDay === 'sunday'){
//   console.log(`${theDay} is a weekend`);
// }else {
//   console.log(`${theDay} is a working day`)
// };

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
 
//! Answer : 

function getDaysInMonth(mothInput){
  const month = monthInput.toLowerCase();
   const monthDays = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };
 if (monthDays.hasOwnProperty(month)) {
    // Capitalize first letter for output
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const days = monthDays[month];
    console.log(`${capitalizedMonth} has ${days} day${days > 1 ? 's' : ''}.`);
  } else {
    console.log('Invalid month entered.');
  }
}


//? 2 -Write a program which tells the number of days in a month, now consider leap year.

function isLeapYear(year) {
  // Leap year if divisible by 400 OR divisible by 4 but not by 100
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function getDaysInMonth(monthInput, year) {
  const month = monthInput.toLowerCase();

  const monthDays = {
    january: 31,
    february: 28, // base days in February
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };

  if (!monthDays.hasOwnProperty(month)) {
    console.log('Invalid month entered.');
    return;
  }

  let days = monthDays[month];

  // Adjust for leap year if February
  if (month === 'february' && isLeapYear(year)) {
    days = 29;
  }

  // Capitalize first letter
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  console.log(`${capitalizedMonth} ${year} has ${days} day${days > 1 ? 's' : ''}.`);
}

// Example usage:
const userMonth = prompt('Enter a month:');
const userYear = parseInt(prompt('Enter a year:'), 10);

if (!isNaN(userYear)) {
  getDaysInMonth(userMonth, userYear);
} else {
  console.log('Invalid year entered.');
}
