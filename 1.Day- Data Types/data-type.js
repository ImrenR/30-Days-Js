//** EXERCISES -1 **/

//***********************************************************************************/
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal
//? 1- Check if typeof '101 is equal to 10, if it s not make it exactly equal

//** EXERCISES -2 **/

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
console.log(randomNumber)
//? 7- Generate a random number between 0 - 255 inclusively

let number5 = Math.floor(Math.random()*256)
console.log(number5)

//? 8- Access the 'JavaScript' string characthers using a random number

 let cumle = "JavaScript";

 let randomIndex = Math.floor(Math.random()*cumle.length);
 console.log(randomIndex)

//? 9- Use console.log() and escape characters to print the following pattern.

console.log('1\t1\t1\t1\t1\n' + '2\t1\t2\t4\t8\n' + '3\t1\t3\t9\t27\n' + '4\t1\t4\t16\t64\t' +
'5\t1\t5\t25\t125\n');

//? 10- USe subtr to slice out the phrace because because becuase from the following sentence
//? 'You cannot end a sentence with because because because is a conjunction'

let sentence1= 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence1.slice(30,54))

//** EXERCISES -2 **/

//**************************************************************************************/
//? 1- 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of the world love in this sentence.
//? 2- Use match() to count the number of all because in the following sentence :
// ' You cannot end a sentence with because because because is a conjusction'
//? 3- Calculate the total anual income of the person by extracting the numbers
//? from the following text. 'He earns 5000 euros from salary per month,
//? 10000 euros anual bonus, 15000 euro online courses per month'.
