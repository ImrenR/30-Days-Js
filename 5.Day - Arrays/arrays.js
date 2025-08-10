//***************************** EXERCISES - 1 ************************* */

//? 2- Declare an empty array;

let arr = [];
console.log(arr);

//? 3- Declare an array with more than 5 number of elements

let arr1 = [1, "Elma", 2, 8, [1, 2], 7];
console.log(`This array more than 5 number of elements : ${arr1.length}`);

//? 4- Find the length of your array

console.log(`This array length is ${arr1.length}`);

//? 5- Get the first item, the middle item and the last item of the array

console.log("First:", arr1[0], "Middle:", arr1[3], "End:", arr1[5]);

//? 6- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ["Imren", 3, 567, "Portugal", 7, 9, [1, 2, 3]];

console.log(mixedDataTypes.length);

//? 7- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//? 8- Print the array using console.log()

console.log(itCompanies);

//? 9- Print the number of companies in the array

console.log(itCompanies.length);

//? 10- Print the first company, middle and last company

console.log(
  "First Company",
  itCompanies[0],
  "Middle Company:",
  itCompanies[3],
  "End Company:",
  itCompanies[6]
);

//? 11- Print out each company

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//? 12- Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//? 13- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
const firstCompanies = itCompanies.slice(0,itCompanies.length-1).join(', ');
const lastCompany = itCompanies[itCompanies.length-1];
const sentence = `${firstCompanies} and ${lastCompany} are big IT companies `
console.log(sentence);

//? 14- Check if a certain company exists in the itCompanies array. 
//? If it exist return the company else return a company is not found

function checkCompany(company){
  if(itCompanies.includes(company)){
   return company;
  }else {
    return 'Company is not found'
  }
};

console.log(checkCompany('Google'));
console.log(checkCompany('imren'));

//? 15-  Filter out companies which have more than one 'o' without the filter method
 
// ??


//? 16- Sort the array using sort() method

const sortIt = itCompanies.sort();
console.log(sortIt);

//? 17- Reverse the array using reverse() method

console.log(itCompanies.reverse());

//? 18- Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3));

//? 19-  Slice out the last 3 companies from the array

const lastThree = itCompanies.slice(itCompanies.length - 3);
console.log(lastThree);

//? 20- Slice out the middle IT company or companies from the array

const middleComp = itCompanies.length/2;
const middleIndex = itCompanies.slice(middleComp, middleComp +1);
console.log(middleIndex);

//? 21- Remove the first IT company from the array

const removeFirst = itCompanies.shift();
console.log(removeFirst);

//? 22- Remove the middle IT company or companies from the array
const middleIndex1 = (itCompanies.length/2);
const removedCompany = itCompanies.splice(middleIndex1,  1);


console.log(removedCompany);

//? 23- Remove the last IT company from the array

const lastRemoved = itCompanies.pop();
console.log(lastRemoved);


//? 24- Remove all IT companies

itCompanies.length = 0;
const removeAllCompanies = itCompanies.splice(0,itCompanies.length);
console.log(removeAllCompanies);

//***************************** EXERCISES - 2 ************************* */


//? 3- In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added

const addMeat = shoppingCart.push('Meat');
console.log(shoppingCart); // added


// add Sugar at the end of you shopping cart if it has not been already added

const addSugar = shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey

const honeyIndex = shoppingCart.indexOf('Honey');

if(honeyIndex !== -1){
  shoppingCart.splice(honeyIndex,1);
}
console.log(shoppingCart);

// modify Tea to 'Green Tea'

const modifiedList = shoppingCart.indexOf("Tea");

if(modifiedList !== -1){
  shoppingCart[modifiedList] = 'Green Tea';
}

console.log(shoppingCart);

//? 4-In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//? If it does not exist add to the countries list.

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]



const addCountry = countries.indexOf('Ethiopia');
if (addCountry !== -1){
  console.log('Etiopia is existed in the list')
}else {
  countries.push('Ethiopia')
}



//? 5-In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
//? If it does not exist add Sass to the array and print the array.

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const isExisted = webTechs.indexOf("Sass");

if(isExisted !== -1){
  console.log("Sass is a Css preprocess");
}else
{
  webTechs.push('Sass')
 
};

console.log(webTechs);

//? 6 -Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']


const fullStack1 = [...frontEnd, ...backEnd];
console.log(fullStack1);

console.log(fullStack)

// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]



//***************************** EXERCISES - 3 ************************* */

//? 1- The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

//? 2- Find the middle country(ies) in the countries array

//? 3- Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
