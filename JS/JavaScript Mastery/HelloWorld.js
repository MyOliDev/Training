/*
console.log("Hello variable");
var  myvarVariable = "Welcome to VAR variable"
console.log( "var: " + myvarVariable)
let  myletVariable = "Welcome to LET variable"
console.log( "var: " + myletVariable)
//Single Line Comment
Multi line comment
Second line Comment
Third Line comment
*/


const myUserFisrtName = 'James';
const myBacktricksExample = `Hello ${myUserFisrtName},`
console.log(myBacktricksExample + ' - ' + typeof myBacktricksExample);

const myBacktricksExample2 = `Addition 2+5 = ${2 + 5}`;
console.log(myBacktricksExample2 + ' - ' + typeof myBacktricksExample2);

//NUMBERS
const FirstNumber = 5;
const SecondNumber = 10;
const Result = FirstNumber + SecondNumber;


const ResultDiv = FirstNumber / SecondNumber;

console.log(Result);

console.log(ResultDiv + " - " + typeof ResultDiv);


// Null => Empty

let MyNullVariable = null;
console.log(MyNullVariable);

MyNullVariable = 20;
console.log(MyNullVariable);


// Undefined
let x;
console.log(x);


//Object
const objPerson = {
firstname: 'James',
lastname: 'Bond',
age: 25,
}

console.log(objPerson.firstname + " " + objPerson.lastname  + " is " + objPerson.age + " old," )
console.log("objPerson: " + typeof objPerson)


const myArray = [1,3,5,7]
console.log(myArray[0]);
console.log("myArray: " + typeof myArray)


const myDate = new Date();
console.log(myDate);
console.log("myDate: " + typeof myDate)

//Statucally Type => already known   (C languages)
// Dynamically typed => can recievd different / change  typed (javaScript)

const a = 5;
const b = 10;
let resultArthmetic = 0
resultArthmetic =  a+ b
console.log(resultArthmetic);
