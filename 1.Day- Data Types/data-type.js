//** EXERCISES -1 **/

//***********************************************************************************/
//? 1- Change all the strings characters to capital letters using toUpperCase()

let cml = "ama ben yapmadim";
console.log(cml.toUpperCase());

//? 2- Change all the strings characters to lowercase 

let cumle1= 'JAVASCRIPT';
console.log(cumle1.toLocaleLowerCase());

//? 3- Cut out the first word of the string using substr() or substring() method
console.log(cumle1.substring(1,10))

//? 4- Slice out the phrase 'Days of JavaScript' from '30 Days Of JavaScript'

let sentence2 = '30 Days Of JavaScript';
console.log(sentence2.length);
console.log(sentence2.substring(3,21));

//? 5- Check if the string contains a word 'Script' using includes()

console.log(sentence2.includes('Script'));

//? 6- Split the string into array 

console.log(sentence2.split(''));

//? 7- Split the string at the space using split()

console.log(sentence2.split(" "))
//? 8- 'Facebook, Google, Microsoft, Apple, IBM , Oracle, Amazon' split the string at the comma and change it to an array.

let sentece5 = 'Facebook, Google, Microsoft, Apple, IBM , Oracle, Amazon';

console.log(sentece5.split(" "));

//? 9- Change 30 Days Of JavaScript to 30 Days Of Python using replace ()

let sentece6 = '30 Days Of JavaScript';

console.log(sentece6.replace('JavaScript', 'Python'));

//? 10- What is the character index 15 in "30 Days Of JavaScript" string use charArt()

console.log(sentece6.charAt(15)); // answer : S

//? 11 - What is the character code of J in '30 Days Of JavaScript' string using chartCodeAt()

console.log(sentece6.charCodeAt('J')) // asnwer 51

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

//** EXERCISES -3 **/

//**************************************************************************************/
//? 1- 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of the world love in this sentence.

let abcz = 'Love is the best thing in this world. Some found their love and some are still looking for their love';
let lowerCaseSentence = abcz.toLowerCase();
const words = lowerCaseSentence.match(/\b\w+\b/g);
const count = words.filter(word => word === 'love').length;
console.log(`The word "love" appears ${count} times.`);

