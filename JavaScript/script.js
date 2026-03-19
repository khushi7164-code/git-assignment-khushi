//'use strict'

/*let firstname = 'John';
//let lastname = 'Doe';
//let age = 30;   

//console.log(`My name is ${firstname} ${lastname} and I am ${age} years old.`);

// ****camelCase oporaches : variable name shoulde be not to start with number and should not contain space and should be in camelCase format.   

let firstName = 'John';
console.log(`my name is ${firstName}`);

// this is the constant and default values 
const PI = 3.14;
console.log(`the value of PI is ${PI}`);


//Declaring multiple variables in a single line
let myPrviousJob = 'Software Engineer';
let myCurrentJob = 'Data Scientist';

console.log(` ${myPrviousJob} and  ${myCurrentJob}`); */


//console.log(10 + 20 - 5)


//let firstName = 'John';
//let lastName = 'Doe';

//console.log(firstname , lastname)
//console.log(firstname)
//console.log(lastname)

/*
let year = 20 
let firstname = 'John';
let age = 20.5

console.log(typeof year)
console.log(typeof firstname)
console.log(typeof age)


let javaIsFun = true;
javaIsFun = 'mahesh'
console.log(typeof true)
console.log(typeof javaIsFun)

let birthYear;
console.log(birthYear)
console.log(typeof birthYear) */


/*
//operators  :  this is follow the left to right and precedence is follow the BODMAS rule.

let currentYear = 2026
let ageSuresh = 2026 - 1990
let ageRamesh = 2026 - 1995

console.log(ageSuresh <= ageRamesh)
console.log(ageSuresh  * 2, ageRamesh / 2 , 2 ** 4)

let firstName = 'John';
let lastName = 'Doe';
console.log(firstName +' ' + lastName)

let x = 10 + 5; 
x +=10;
x++;  
x--;
console.log(x)

console.log(20+2-1)*/


/*
///Assignment : BMI Calculator


// 1. Store mass and height
let sureshMass = 70;     // in kg
let sureshHeight = 1.75; // in meters

let rameshMass = 80;     // in kg
let rameshHeight = 1.80; // in meters

// 2. Calculate BMI
let sureshBMI = sureshMass / (sureshHeight * sureshHeight);
let rameshBMI = rameshMass / (rameshHeight * rameshHeight);

// 3. Boolean variable to check higher BMI
let markHigherBMI = sureshBMI > rameshBMI;

// Display results
console.log("Suresh BMI:", sureshBMI);
console.log("Ramesh BMI:", rameshBMI);
console.log("Does Suresh have higher BMI than Ramesh?", markHigherBMI);

*/

/*
//string using + and self declaration
//string concatenation and template literals   this is used to the backticks  without  + operators and we can use the variable directly in the string using ${variableName} this is called template literals.

const firstName = 'Suresh';
const year = 2026;
const birthYear = 1990;


console.log('My name is ' + firstName + ' and I am ' + (year - birthYear) + ' years old.');
// Using template literals
console.log(`My name is ${firstName} and I am ${year - birthYear} years old.`);
*/


//if else statement
//let age = 17;
//if (age >= 18) {
//    console.log('You are an adult.');
//} else {
//    const yearsLeft = 18 - age;
//    console.log(`You are a minor. You will be an adult in ${yearsLeft} years.`);
//}

/*
//else if statement
let age = 17;

if (age >= 18) {
    console.log('You are an adult.');
} else if (age >= 13) {
    console.log('You are a teenager.');
} else {
    const yearsLeft = 18 - age;
    console.log(`You are a minor. You will be an adult in ${yearsLeft} years.`);
}
/*
//type conversion 
const inputYear = 2026;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(String(inputYear), inputYear);
console.log(typeof year)


console.log(typeof NaN)  //data type of NaN is number  **********

*/

//Types coercion

//console.log('I am ' + 23 + ' years old'); // this is called type coercion because the number 23 is converted to a string and concatenated with the other strings.
//console.log('23' - '10' - 'year'); // this is called type coercion because the strings '23' and '10' are converted to numbers and then subtracted from each other and then 3 is subtracted from the result.

//console.log('23' - 10 - 'year'); // this is called type coercion because the strings '23' and '10' are converted to numbers and then subtracted from each other and then 3 is subtracted from the result.

/*
let n = '1' - 1; // this is called type coercion because the number 1 is converted to a string and concatenated with the string '1' to produce the string '11'.
console.log(n) // this will output '11' because the number 1 is converted to a string and concatenated with the string '1' to produce the string '11'.

//n = n - 1;

console.log(2+3+4+'5')
console.log('10' - '4' - '3' - 2 + '5')

console.log(2+3+4-'5') // this will output '95' because the numbers 2, 3, and 4 are added together to produce the number 9, and then the string '5' is concatenated to the result to produce the string '95'.
   

//falsey values : 0, '', undefined, null, NaN

console.log(Boolean(0)) // this will output false because 0 is a falsey value.
console.log(Boolean('raj')) // this will output false because '' is a falsey value.
console.log(Boolean(undefined)) // this will output false because undefined is a falsey value.
console.log(Boolean(null)) // this will output false because null is a falsey value.
console.log(Boolean(NaN)) // this will output false because NaN is a falsey value.
console.log(Boolean('')) // this will output false because '' is a falsey value.

*/

/*
const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}


//let money ;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}
*/
/*
//strict equality = = vs loose equality = = =

const money = '100';
if (money == 100)
    console.log('message print successfully'); // this will output 'message print successfully' because the string '100' is loosely equal to the number 100.

if (money === 100) 
    console.log('this message is strict quality checked'); // this will output 'You have exactly 100 dollars :D (strict)' because the string '100' is strictly equal to the string '100'.          


//ternary operator :  ?(if) : (else) this is a shorthand way of writing an if-else statement. it takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
//const score = 80;
//const result = score > 70 ? 'good' : 'improve';
//console.log(result) // this will output 'wine' because the condition score > 70 is true, so the value 'wine' is assigned to the variable result.



const score = 50;
const result = score > 70 ? 'good' : 'improve';
console.log(result) // this will output 'win



let result1;
if (score > 70) {
    result1 = 'good';
} else if (score > 50) {
    result1 = 'improve';
}else {
    result1 = 'bad';
}

console.log(result1) // this will output 'improve' because the condition score > 70 is false, but the condition score > 50 is true, so the value 'improve' is assigned to the variable result1.

*/

//logical operators : && (and), || (or), ! (not)
/*
const hasDriversLicense = true;     
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision) // this will output true because both hasDriversLicense and hasGoodVision are true.
console.log(hasDriversLicense || hasGoodVision) // this will output true because at least one of hasDriversLicense or hasGoodVision is true.




if (hasDriversLicense && hasGoodVision) {
    console.log('You can drive!');
} else {
    console.log('You cannot drive.');
}*/


//basic function 
//parameter and argumanets  -- variable which is passing to the input
//function 

// function greetings(){

//     console.log('good morning');
      
// }

// greetings()
// greetings()
// // greetings()


// function greetings(name){ //variable inside the function

//     console.log('hello' + name)
// }

// greetings('suresh') // this is the perameter values is pass


// //***default parameter 

// function greetings(name='there'){ //variable inside the function

//     console.log('hello' + name)
// }

// greetings('ram') // this is the perameter values is pass



//***return value 

// function add(a,b){

//     return a+b;
// }

// sum  = add(2,2)
// console.log(sum)


//*****storing function in variable  


// const greet  = function () {

//     console.log('hello')
// }

// greet()

   /* 
// //arrow function

//  const greetArrow = () => console.log('hello from arrow function');
//  greetArrow()


//limitations of arrow function : 
// 1. it does not have its own this keyword, 
// 2. it cannot be used as a constructor, 
// 3. it does not have the arguments object, 
// 4. it cannot be used with the new keyword, 
// 5. it cannot be used as a generator function, 
// 6. it cannot be used with the yield keyword.
const person = {
    name: 'Suresh',
    age : 30,
    greet: ()=> {
        console.log(this.name);
    }
}
person.greet(); // Output: Hello, my name is Suresh and I am 30 years old.

const person1 = ['suraesh','raj','priya']

console.log(person1.length) // this will output 3 because the array person1 has 3 elements.
console.log(person1[0]) // this will output 'suresh' because the first element of the array person1 is 'suresh'.

person1.push(20) // this will add 20 to the end of the array person1.
console.log(person1) // this will output ['suresh', 'raj', 'priya', 20] because the array person1 now has 4 elements after adding 20 to the end of the array.

 person1.pop(20) // this will remove the last element of the array person1, which is 'ramesh'.
 console.log(person1) // this will output ['suresh', 'raj', 'priya'] because the last element of the array person1, which is 'ramesh', has been removed from the array.

 */
/*
//loops
//for loops initalization, condition, increment/decrement 


for (let i = 0; i < 5; i++) {
    console.log('good');
}

//while loop
let i = 1;

while (i < 5) {
    console.log('hello');
    i++;
}
/*

const person = {

    name: 'Suresh',
    age: 30,
    hobbies: ['reading', 'traveling', 'cooking']
}
console.log(person.name) // this will output 'Suresh' because the name property of the person object is 'Suresh'.
console.log(person.hobbies[0]) // this will output 'reading' because the first element of the hobbies array is 'reading'.
console.log(person.age)

//object method
const person1 = {
    name: 'Suresh', 
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

person1.greet() // this will output 'Hello, my name is Suresh and I am 30 years old.' because the greet method of the person1 object is called, which uses the this keyword to access the name and age properties of the person1 object.
*/
//let -- functions call 
//var - global scope and function scope values can be reassigned and redeclared
//let - block scope values can be reassigned but cannot be redeclared
//const - block scope and cannot be reassigned

//************************************************************************************************************ */
// function test() {
//     var a = 5;
//     const b = 10;
//     let c = 20;   
// }

// console.log(a) // this will throw an error because the variable a is declared with var inside the function test, which means it is only accessible within the function test and not outside of it.
//  console.log(b); // this will output 10 because the variable b is declared with const and initialized with the value 10.
//  console.log(c); // this will output 20 because the variable c is declared with let and initialized with the value 20.


//  const obj1 = {
//     name: 'Suresh',
//     city : 'Hyderabad'
//  }
//  obj1.department = 'IT' // this will add a new property department with the value 'IT' to the obj1 object.

//  console.log(obj1.name) // this will output 'Suresh' because the name property of the obj object is 'Suresh'.
//  console.log(obj1.city) // this will output 'Hyderabad' because the city property of the obj object is 'Hyderabad'.
//  console.log(obj1.department) // this will output 'IT' because the department property of the obj1 object is 'IT'.
    
// const obj2 = {
//     a:10,
//     b:20
// }
    
// //********************speread operator
// //... this is the used of copying the properties of one object to another object. it is also used to merge two objects into one object.
// const obj3 = {...obj1,...obj2} // this will create a new object obj3 that is a copy of obj1 using the spread operator.
// console.log(obj3) // this will output {name: 'Suresh', city: 'Hyderabad', a: 10, b: 20} because the obj3 object is a copy of the obj1 and obj2 objects, which have the properties name, city, a, and b with the values 'Suresh', 'Hyderabad', 10, and 20 respectively.


// //*****************rest operator
// function sum(...numbers) { // this will create a function sum that takes a variable number of arguments using the rest operator.
//     return numbers.reduce((acc, curr) => acc + curr, 0); // this will return the sum of all the numbers passed as arguments to the sum function using the reduce method.
// // }
// // console.log(sum(1, 2, 3, 4, 5)); // this will output 15 because the sum function is called with the arguments 1, 2, 3, 4, and 5, and the reduce method adds them together.


// const obj1 = {a:10, b:20}
// const obj2 = obj1
// const obj3 = {...obj1} // this will create a new object obj3 that is a copy of obj1 using the spread operator.

// obj3.b = 30 
// obj2.b = 40 

// console.log(obj1) // this will output {a: 10, b: 40} because the obj1 object is a reference to the same object as obj2, which means that when the b property of obj2 is changed to 40, it also changes the b property of obj1 to 40. However, the obj3 object is a copy of obj1, so when the b property of obj3 is changed to 30, it does not affect the b property of obj1 or obj2.
// console.log(obj3) // this will output {a: 10, b: 40} because the obj2 object is a reference to the same object as obj1, which means that when the b property of obj1 is changed to 40, it also changes the b property of obj2 to 40.


const a=[1,2,3]
a.push(4) // this will add 4 to the end of the array a.
console.log(a) // this will output [1, 2, 3, 4] because the array a now has 4 elements after adding 4 to the end of the array.


const obj1 = {a:10, b:20}
obj1.a = 30 // this will add a new property c with the value 30 to the obj1 object.
console.log(obj1) 





