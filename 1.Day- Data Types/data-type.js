//** EXERCISES -1 **/

//***********************************************************************************/

//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal

let number = "10"; // string
let number2 = 10; // number

console.log(`${number === number2}`); // printed as 'false' so lets make it exactly equal

number = parseInt(number);
console.log(number === number2); // Now retured true !!

//? 2- Check if parseFLoat('9.8') is equal to 10 if not make it exactly equal with 10

let hero = parseFloat("9.8"); // number
let hero1 = 10;

console.log(hero == hero1); // it returned false

let hero2 = Math.ceil(hero);
console.log(hero2 === hero1); // Now it returned as 'true'

//? 3- Check if 'on' is found in both python and jargon

let tip = "python";
let tip2 = "jargon";

console.log(
  `Python includes 'on' : ${tip.includes(
    "on"
  )} also Jargon includes too : ${tip2.includes("on")} `
);

//? 4- I hope this course is not full of jargon. Check if the jargon in the sentence

let sentence = "I hope this course is not full of jargon";

console.log(
  `Hey hey I am just cheking if there is any jargon here : ${sentence.includes(
    "jargon"
  )}`
);
//? 5- Generate a random number between 0 - 100 inclusively
 
let number4 = Math.floor(Math.random()*101)
console.log(number4)

//? 6- Generate a random number between 50 - 100 inclusively

let randomNumber = Math.floor(Math.random()* (100 - 50 + 1) + 50 );
//? 7- Generate a random number between 0 - 255 inclusively
//? 8- Access the 'JavaScript' string characthers using a random number
//? 9- Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

//? 10- USe subtr to slice out the phrace because because becuase from the following sentence
//? 'You cannot end a sentence with because because because is a conjunction'

//** EXERCISES -2 **/

//**************************************************************************************/
//? 1- 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of the world love in this sentence.
//? 2- Use match() to count the number of all because in the following sentence :
// ' You cannot end a sentence with because because because is a conjusction'
//? 3- Calculate the total anual income of the person by extracting the numbers
//? from the following text. 'He earns 5000 euros from salary per month,
//? 10000 euros anual bonus, 15000 euro online courses per month'.
