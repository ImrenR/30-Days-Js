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

/*Template Literals*/

let abc = 2;
let xyz =3 ;

console.log(`${abc} is greater than ${xyz} ? : ${abc > xyz}`)