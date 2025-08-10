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

console.log(seconds);

//** EXERCISES -2 **/

//***********************************************************************************/
//? 1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let vase = 20;
let height = 10;
let tringle = 100;

//? 2- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//Enter side a: 5
//Enter side b: 4
//Enter side c: 3
//The perimeter of the triangle is 12

//? 3 -Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

//? 4- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

//? 5-Calculate the slope, x-intercept and y-intercept of y = 2x -2

//? 6-Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

//? 7- Compare the slope of above two questions.

//? 8-Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//? 9-Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120
//? 10-If the length of your name is greater than 7 say, your name is long else say your name is short.

//? 11-Compare your first name length and your family name length and you should get this output.

let firstName = "Asabeneh";
let lastName = "Yetayeh";
// Your first name, Asabeneh is longer than your family name, Yetayeh
//? 12-Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250;
let yourAge = 25;
//I am 225 years older than you.
//? 13-Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//Enter birth year: 1995
//You are 25. You are old enough to drive

//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.

//? 14-Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//Enter number of years you live: 100
//You lived 3153600000 seconds.

//? 15-Create a human readable time format using the Date time object

//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm
//** EXERCISES -3 **/

//***********************************************************************************/
//? 1-Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
