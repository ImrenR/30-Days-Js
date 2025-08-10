//** EXERCISES -1 **/

//***********************************************************************************/

//? 1- Declare firstName,lastName,country,city,age,isMarried,year variable and assign value to it and use the typeof operator to checkthe different data types

const list = {
  firstName: " Imren",
  lastName: "Rahbay",
  country: "Turkey",
  city: "Hatay",
  age: 34,
  isMarried: false,
  year: 2025,
};

console.log(typeof list.firstName);
console.log(typeof list.lastName);
console.log(typeof list.country);
console.log(typeof list.city);
console.log(typeof list.age);
console.log(typeof list.isMarried);
console.log(typeof list.year);
//? 2- Check if type of  '10' equal to 10

let number = 10;
let cumle = "10";

console.log(typeof number == cumle);

//? 3- Figure out the result of the following expressions first without using console.log().
//? After you decide the result confirm it by using console.log()
//  && (and) : returns the first //!falsy, if both truthy , returns the last one
// || (or) : returns first //!truthy, if both falsy, returns the last one

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); // true


//? 3- Use the Date object to do the following activities

// What is the year today?

const today = new Date();
const year = today.getFullYear();
console.log(year);

// What is the month today as a number?

const month = today.getMonth() + 1 ;
console.log(month);

// What is the date today?

console.log(new Date());

//What is the day today as a number?

const day = today.getDate();
console.log(day);

//What is the hours now?
const hour = today.getHours();
console.log(hour);
//What is the minutes now?

const minute = today.getMinutes();
console.log(minute);

//Find out the numbers of seconds elapsed from January 1, 1970 to now.

const miliseconds = Date.now();
const second = Math.floor(miliseconds / 1000 );

console.log(second);

//** EXERCISES -2 **/

//***********************************************************************************/
//? 1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = 20;
let height = 10;
let tringle = 100;

let area = 0.5 * base *height;

console.log(`The area of the tringle is ${area}`);

//? 2- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let  a =5;
let  b = 4;
let c = 3;

let triangle1 = a + b + c;
console.log(triangle1);



//? 3-Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

 // let hours = prompt('Enter the hour');
 // let rate = prompt('Enter the rate');

 // let earning = hours * rate;

 // console.log(earning); asnwer 1120

//? 4-If the length of your name is greater than 7 say, your name is long else say your name is short.

const yourName = 'Imrencim';

if (yourName.length > 7 ) {
  console.log(' Your name is long')
}else {
  console.log('Yourname is short')
}

//? 5-Compare your first name length and your family name length and you should get this output.

let firstName = "Asabeneh";
let lastName = "Yetayeh";

if ( firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
}else {
  console.log('Your last name is longer than your first name')
}

//? 6-Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250;
let yourAge = 25;

let difference = myAge - yourAge;
console.log(`I am ${difference} years older than you`);

//? 7-Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//You are 25. You are old enough to drive
//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.
//let birthYear = parseInt(prompt('Enter your birth year:'));
//let currentYear = new Date().getFullYear();
//let years = currentYear - birthYear;
// if (years > 18){
//   console.log(`You are ${years}. You are old enough to drive`)
// }else {
//   console.log('You are not allowed')
// };
//

//? 8-Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//Enter number of years you live: 100
// let yearsLived = parseInt(prompt("Enter the years you lived:"));

// let secondsLived = yearsLived * 365 * 24 * 60 * 60 ;

// console.log(`You have lived approximately ${secondsLived} seconds.`);
//You lived 3153600000 seconds.




