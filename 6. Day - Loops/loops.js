//*******************EXERCISE- 1*********************************** */

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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

//? 1- Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i<=10; i++){
  console.log(i)
};

let x = 0 ;
while (x<=10){
  console.log(x);
  x++;
};

let j= 0;
do {
  console.log(j);
  j++;
}while(j<=10);


//? 2- Iterate 10 to 0 using for loop, do the same using while and do while loop

for(let l=10; l>=0; l--){
  console.log(l);
}


let u=10;
do{
  console.log(u);
  u--;
}while(u>=0);

let p=10;
while(p>=0){
  console.log(p);
  p--;
};

//? 3- Iterate 0 to n using for loop
 
let n = 6;

for(let m=0; m<=n; m++){
  console.log(n)
};



//? 6- Using loop print the following pattern

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


//? 7- Use for loop to iterate from 0 to 100 and print only even numbers

for (let k=0; k<=100; k++){
  if (k%2===0){
console.log(k);
  }
};


//? 8- Use for loop to iterate from 0 to 100 and print only odd numbers

for (let b=0; b<=100; b++){
  if (b%2 !== 0){
    console.log(b);
  }
};

//? 9- Use for loop to iterate from 0 to 100 and print only prime numbers.

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



//? 10- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.


let sum=0
for(let num1= 0; num1<=100; num1++){
   sum +=num1 
   console.log(sum);
}


//? 11- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
 let sumEven=0;
 let sumOdd = 0;

 for(let num2=0; num2<=100; num2++){
   
    if (num2 % 2 === 0){
     sumEven += num2;
    }else {

      sumOdd += num2;
    }
 };

   console.log(sumEven);
    console.log(sumOdd);



//? 12- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
//?Print sum of evens and sum of odds as array

// [2550, 2500]

let evens = [];
let odds = [];

evens.push(sumEven);
odds.push(sumOdd);

let mergedBoth = [...evens,...odds];
console.log(mergedBoth);

//? 13-Develop a small script which generate array of 5 random numbers

let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));  // random number 0 to 99
}

console.log(randomNumbers);

//? 14-Develop a small script which generate array of 5 random numbers and the numbers must be unique

let uniqueNum = [];

for(let v =0; v< 5; v++){
  uniqueNum.push(Math.floor(Math.random() * 300));

}
console.log(uniqueNum);
//? 15-Develop a small script which generate a six characters random id:

// 5j2khz

function generateRandomId (length = 6){
  const chars = 'abcdefglmnopqrkhstuvwyz0123456789';
  let id = '';

  for (let i = 0; i< length; i++){
    const randomIndex = Math.floor(Math.random()*chars.length);
    id +=chars[randomIndex]
  }
  return id;
}

console.log(generateRandomId());

//*******************EXERCISE- 2*********************************** */



//? 1-Develop a small script which generate any number of characters random id:

// fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
//? 2-Write a script which generates a random hexadecimal number.
// '#ee33df'
//? 3-Write a script which generates a random rgb color number.
// rgb(240,180,80)
//? 4-Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//? 5-Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//? 6-Use the countries array to create the following array of arrays:
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
//? 7-In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
//? 8-In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']

//? 9-Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia

//? 10-Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
//? 11-Find the longest word in the webTechs array

//? 12-Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]


//? 13-An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
//? 14-Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
//? 15-This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

//? 15-Print all the elements of array as shown below.

  // const fullStack = [
  //   ['HTML', 'CSS', 'JS', 'React'],
  //   ['Node', 'Express', 'MongoDB']
  // ]
  // HTML
  // CSS
  // JS
  // REACT
  // NODE
  // EXPRESS
  // MONGODB







//*******************EXERCISE- 3*********************************** */




//? 1-Copy countries array(Avoid mutation)
//? 2- Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

//? 3- Sort the webTechs array and mernStack array
//? 4-  Extract all the countries contain the word 'land' from the countries array and print it as array

//? 5- Find the country containing the hightest number of characters in the countries array

//? 6- Extract all the countries contain the word 'land' from the countries array and print it as array

//? 7- Extract all the countries containing only four characters from the countries array and print it as array

//? 8- Extract all the countries containing two or more words from the countries array and print it as array

//? 9- Reverse the countries array and capitalize each country and stored it as an array





