//*******************EXERCISE- 1*********************************** */

//? 1- Iterate 0 to 10 using for loop, do the same using while and do while loop
//*********************************************************************** */

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);
//*********************************************************************** */
//? 2- Iterate 10 to 0 using for loop, do the same using while and do while loop
//*********************************************************************** */
for (let l = 10; l >= 0; l--) {
  console.log(l);
}

let u = 10;
do {
  console.log(u);
  u--;
} while (u >= 0);

let p = 10;
while (p >= 0) {
  console.log(p);
  p--;
}
//*********************************************************************** */
//? 3- Iterate 0 to n using for loop
//*********************************************************************** */
let n = 6;

for (let m = 0; m <= n; m++) {
  console.log(n);
}
//*********************************************************************** */
//? 4- Using loop print the following pattern
//*********************************************************************** */

//console.log("i\t i^2\t i^3");  // header with tabs for spacing

for (let c = 0; c <= 10; c++) {
  console.log(`${c}\t ${c ** 2}\t ${c ** 3}`);
}

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

//*********************************************************************** */
//? 5- Use for loop to iterate from 0 to 100 and print only even numbers
//*********************************************************************** */

for (let k = 0; k <= 100; k++) {
  if (k % 2 === 0) {
    console.log(k);
  }
}

//*********************************************************************** */
//? 6- Use for loop to iterate from 0 to 100 and print only odd numbers
//*********************************************************************** */

for (let b = 0; b <= 100; b++) {
  if (b % 2 !== 0) {
    console.log(b);
  }
}

//*********************************************************************** */
//? 7- Use for loop to iterate from 0 to 100 and print only prime numbers.
//*********************************************************************** */

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

//*********************************************************************** */
//? 8- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//*********************************************************************** */
// The sum of all numbers from 0 to 100 is 5050.

let sum = 0;
for (let num1 = 0; num1 <= 100; num1++) {
  sum += num1;
  console.log(sum);
}

//*************************************************************************************************/
//? 9- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//*************************************************************************************************/

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;

for (let num2 = 0; num2 <= 100; num2++) {
  if (num2 % 2 === 0) {
    sumEven += num2;
  } else {
    sumOdd += num2;
  }
}

console.log(sumEven);
console.log(sumOdd);
//***************************************************************************************************/
//? 10- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//?Print sum of evens and sum of odds as array
//*****************************************************************************************************/

// [2550, 2500]

let evens = [];
let odds = [];

evens.push(sumEven);
odds.push(sumOdd);

let mergedBoth = [...evens, ...odds];
console.log(mergedBoth);

//*********************************************************************** */
//? 11-Develop a small script which generate array of 5 random numbers
//*********************************************************************** */
let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100)); // random number 0 to 99
}

console.log(randomNumbers);

//*********************************************************************** */
//? 12-Develop a small script which generate array of 5 random numbers and the numbers must be unique
//*********************************************************************** */
let uniqueNum = [];

for (let v = 0; v < 5; v++) {
  uniqueNum.push(Math.floor(Math.random() * 300));
}
console.log(uniqueNum);

//*********************************************************************** */
//? 13-Develop a small script which generate a six characters random id:
//*********************************************************************** */
// 5j2khz

function generateRandomId(length = 6) {
  const chars = "abcdefglmnopqrkhstuvwyz0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}

console.log(generateRandomId());

//*************************************** EXERCISE- 2 ***********************************************************************/

//***************************************************************************************************************************/

//? 1- Develop a small script which generate any number of characters random id:
//*********************************************************************** */

// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba

function generateRandomIds(length) {
  // length → how many characters long you want your random ID to be.
  const chars1 = "abcdefghijklmnopqrstuvwxyz0123456789"; // contains all the characters you want
  let result = " "; // We ll gradually add random characters to this until it reaches the desired length
  for (let d = 0; d < length; i++) {
    // runs 36 times as lentgh is 36
    const randomIndex1 = Math.floor(Math.random() * chars1.length);
    result += chars1[randomIndex1];
  }
  return result;
}
console.log(generateRandomId(12));
console.log(generateRandomId(24));

//*********************************************************************** */
//? 2- Write a script which generates a random hexadecimal number.
//*********************************************************************** */
// '#ee33df'

function generateRandomColor(length) {
  const chars2 = "123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex2 = Math.floor(Math.random() * chars2.length);
    color += chars2[randomIndex2];
  }
  return color;
}

console.log(generateRandomColor());

//*********************************************************************** */
//? 3- Write a script which generates a random rgb color number.
//*********************************************************************** */

// rgb(240,180,80)

function generatedRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb (${r},${g},${b})`;
}

console.log(generatedRGB());

//*********************************************************************** */
//? 4- Using the above countries array, create the following new array.
//*********************************************************************** */
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

upperCountries = [];

for (let i = 0; i < countries.length; i++) {
  upperName = countries[i].toLocaleUpperCase();
  upperCountries.push(upperName);
}

console.log(upperCountries);

//*********************************************************************** */
//? 5- Using the above countries array, create an array for countries length'.
//*********************************************************************** */
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

countriesLength = [];

for (let i = 0; i < countries.length; i++) {
  countriesName = countries[i].length;
  countriesLength.push(countriesName);
}

console.log(countriesLength);

//*********************************************************************** */
//? 6- Use the countries array to create the following array of arrays:
//*********************************************************************** */
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

newArray = [];

for (let i = 0; i < countries.length; i++) {
  country = countries[i];
  const upperCountries1 = countries[i].slice(0, 3).toUpperCase();
  const lengthOfCountries = country.length;
  newArray.push([country, upperCountries1, lengthOfCountries]);
}
console.log(newArray);

//********************************************************************************************************************************************************************/
//? 7- In above countries array, check if there is a country or countries containing the word 'land'.
//? If there are countries containing 'land', print it as array.
// ?If there is no country containing the word 'land', print 'All these countries are without land'.
//********************************************************************************************************************************************************************/
// ['Finland','Ireland', 'Iceland']

newArr = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    newArr.push(countries[i]);
  }
}
if (newArr.length > 0) {
  console.log(newArr);
} else {
  console.log("All these countries are without land");
}

//********************************************************************************************************************************************************************/
//? 8- In above countries array, check if there is a country or countries end with a substring 'ia'.
//? If there are countries end with, print it as array.
//?If there is no country containing the word 'ai', print 'These are countries not ends without ia'.
//********************************************************************************************************************************************************************/
// ['Albania', 'Bolivia','Ethiopia']

newArr2 = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("ia")) {
    newArr2.push(countries[i]);
  }
}
if (newArr2.length > 0) {
  console.log(newArr2);
} else {
  console.log("These are countries not ends without ia");
}

//********************************************************************************************************************************************************************/
//? 9- Using the above countries array, find the country containing the biggest number of characters.
//********************************************************************************************************************************************************************/
// Ethiopia

let longestCountry = countries[0];

for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry);

//********************************************************************************************************************************************************************/
//? 10- Using the above countries array, find the country containing only 5 characters.
//********************************************************************************************************************************************************************/
// ['Japan', 'Kenya']

fiveLetters = [];

for (let i = 1; i < countries.length; i++) {
  if (countries[i].length === 5) {
    fiveLetters.push(countries[i]);
  }
}
console.log(fiveLetters);

//********************************************************************************************************************************************************************/
//? 11-Find the longest word in the webTechs array
//********************************************************************************************************************************************************************/
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestIT = [0];

for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestIT.length) {
    longestIT = webTechs[i];
  }
}
console.log(longestIT);

//********************************************************************************************************************************************************************/
//? 12- Use the webTechs array to create the following array of arrays:
//********************************************************************************************************************************************************************/

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

webArr = [];

for (let i = 0; i < webTechs.length; i++) {
  const webs = webTechs[i];
  const lengthWeb = webTechs[i].length;
  webArr.push([webs, lengthWeb]);
}
console.log(webArr);

//********************************************************************************************************************************************************************/
//? 13- An application created using MongoDB, Express, React and Node is called a MERN stack app.
//?Create the acronym MERN by using the array mernStack
//********************************************************************************************************************************************************************/

const mernStack = ["MongoDB", "Express", "React", "Node"];

newMern = [];

for (let i = 0; i < mernStack.length; i++) {
  const firstW = mernStack[i].slice(0, 1).toUpperCase();
  newMern.push(firstW);
}
console.log(newMern);

//********************************************************************************************************************************************************************/
//? 14- Iterate through the array,
//?["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a
//?for loop or for of loop and print out the items.
//********************************************************************************************************************************************************************/

const technologies = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
const newArray5 = [];

for (const tech of technologies) {
  newArray5.push(tech);
}

console.log(newArray5);



//********************************************************************************************************************************************************************/
//? 15- This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
//********************************************************************************************************************************************************************/
const newFruit = [];
const fruitArr = ['banana', 'orange', 'mango', 'lemon'];

for (let i = fruitArr.length -1; i >=0; i--){
   newFruit.push(fruitArr[i]);
}
console.log(newFruit);
//********************************************************************************************************************************************************************/
//? 16- Print all the elements of array as shown below.
//********************************************************************************************************************************************************************/

 const fullStack = [
['HTML', 'CSS', 'JS', 'React'],
 ['Node', 'Express', 'MongoDB']
 ];

 const combinedArray = [];
 for (let i =0; i<fullStack.length; i++){
  for(let j=0; j <fullStack[i].length; j++){
    combinedArray.push(fullStack[i][j].toLocaleUpperCase());
  }
 };

 console.log(combinedArray);





