//* Concatenating Using Addition Operator

let text1 = " Imren";
let text2 = " Rahby";

let text3 = text1.concat(text2);
console.log(text3);

//* Escape Sequences in String
let paragraph ='Imren\nRahbay\nI work as Full Stack Developer\nI love my job'
console.log(paragraph)

let paragraph1 ='Imren Rahbay\tI work as Full Stack Developer\tI love my job'
console.log(paragraph1)


let paragraph2 ='Imren Rahbay\'s dog'
console.log(paragraph2)

/*Template Literals*/

let name = 'Imnren';
let surname = 'Rahbay';

console.log(`Her ${name} ${surname}`)

let a = 5;
let b =7;

console.log(`${a+b}`)



let abc = 2;
let xyz =3 ;

console.log(`${abc} is greater than ${xyz} ? : ${abc > xyz}`)

//**. STRING METHODS **/
//*************************************************************************/

//! A string is a primitive data type that means we cab not modify it once it s created
//? The string object has many string methids. There are different methods that can help us to work with strings.

//1- LENGTH */

 let string = 'JAVASCRIPT'

 console.log(string.length)
 console.log(string[0])

 //2- IndexOf() */

 console.log(string.indexOf(2)) // There no '2' element includes thats why prints as -1
 console.log(string.indexOf('T'))

 //3- toUpperCase() - toLowerCase()*/

 console.log(string.toLocaleLowerCase())

 //4- Substr   */
//? substr : It takes 2 arguments, the starting index and number of characters to slice
console.log(string.substr(5,2)) // starting index number and length 

//! Substring()
console.log(string.substring(1,4)) // substring() does not include the stopping index
console.log(string.substring(4))


 //5- Split () */

 let country = 'Portugal is beautiful'
  
 console.log(country.split(' ')) // Changes to array ['Portugal]
console.log(country.split(', '))

 //6- replace ()   */

 console.log(country.replace('Portugal', "Turkey"))

 //7- endsWith()- startsWith() */

 console.log(country.endsWith('ipt'))
 console.log(country.startsWith('PORT')) // case sensetive metohd thats why returns false
 console.log(country.startsWith('Port'))
