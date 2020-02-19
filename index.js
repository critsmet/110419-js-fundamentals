//- - - - -
//VARIABLES
//- - - - -

var chris
//'var' and 'let' allow you to declare a variable without assigning it a value.
//in this case, the value is 'undefined'
chris = "Chris"

var chris = ""

//basically never use var, it gives you too much freedom:
//1. It never throws an error if you declare the same variable twice,
//2. When declared inside a function, it becomes global scoped
//3. Linters and most JS pros just say it's bad practice

let jenn = "jenn"
jenn = "Jenn"
//'let' allows you to change the value of a declared variable, and does not let you re-assign the variable name later
//best for iterators or for rare times when you have values that you expect to reassign several times in your application

const cl = "Cohort Lead"
//'const' does not allow you to declare a variable without assigning a value AND you can never change the value
//cl = "CL"
//You are encouraged to use 'const' as often as possible, although some big JS developers say const was a mistake:
//https://twitter.com/dan_abramov/status/1208369896880558080?lang=en

//Set multiple variables at once, works with 'let' or 'const'
// Anyone know how?









//- - - - -
//DATATYPES
//- - - - -

//Strings
const day = "Tuesday"
const date = "02/19/2020"

const fullDate = day + ", " + date

//Numbers
const five = 5
//Can be whole numbers or decimals
const negFiveFive = -5.5
//arithmetic
//+, -, *, /

//How do we create a new variable with the difference of two values?
const difference = five - negFiveFive
//How do we edit the value of a variable by subtracting the value of another?
let number = 5 //we have to use let because we can't change the value of a const
number -= negFiveFive //+= would do the opposite
//this changes the value of the number in the variable
number++ //increment operator
number-- //decrement operator
//these are often used in loops as well

//Booleans
const loggedIn = true
const admin = false

//To JS, empty strings (""), 0, undefined and null are all false. Everything else is true.

//The difference between undefined and null
//undefined means that you declared something but never added a value to it
//null is a value that we assign to something

const loggedInUser = null

//Arrays & Objects
const students = ["Mary", "Anna", "Wale", "Burbage", 1, 90, false, false, true]
const maryObj = {name: "Mary", class: "Web Dev"}
const annaObj = {name: "Ana", class: "Web Dev"}
const studentObjs = [maryObj, annaObj]

//Remember that Arrays and Objects can be passed by reference, not by value.
//What does this mean?




//difference between 'undefined' as return value and undefined error
//Coercion: https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/











//- - - - - - - - - - -
//FUNCTIONS AND METHODS
//- - - - - - - - - - -

//Define a function

//Regular function - LEARN THIS WAY FIRST
function logHi(){
  console.log("Hi!")
}

function twoPlusTwo(){
  return 2 + 2
}

function sumTwoNumbesr(one, two){
  return one + two
}

//Arrow function - ES6, will be very important in a few weeks
const hi = () => console.log("Hi!")
const multiplyTwoNums = () => 2 * 2
//One line functions with implicit returns

//Pass in an argument

function sayHiName(name){
  //console.log("Hi, " + name + "!")
  console.log(`Hi ${name}!`)
  //Interpolation?
}

//Difference between a function definition/declaration, reference, and execution

//Definition/declaration:
function addThree(num){
  return num + 3
}

function addTwo(num){
  return num + 2
}

function addOne(num){
  return num + 1
}

//Reference:
addThree
//NO PARENTHESES
//PARENS, BANANAS

//Execute:
addThree(3)
//We need the parentheses and the argument

//Functions are first-class citizens, meaning that they can be saved to variables and in arrays and objects. They can be passed are arguments or set as return values.


const addNumbers = {
  addThree: addThree,
  addTwo: addTwo,
  addOne: addOne
}

addNumbers.addOne

const addNumbers = [addThree(3), addTwo(2), addOne(1)]

//Use as block in a callback function for an iterator.















//- - - - - - - - - - - - - -
//SCOPES, CLOSURES, HOISTING
//- - - - - - - - - - - - - -

//COMPILATION PHASE

//The first pass is the compilation phase, in which the engine steps through our code line-by-line:

//IT IGNORES ALL FUNCTION EXECUTIONS

//When it reaches a variable declaration, the engine allocates memory and sets up a reference to the variable's identifier, e.g., myVar.

//When the engine encounters a function declaration, it does three things:

//- Allocates memory and sets up a reference to the function's identifier, e.g., `myFunc`.

// - Creates a new execution context with a new scope.

// - Adds a reference to the parent scope (the outer environment) to the scope chain, making variables and functions declared in the outer environment available in the new function's scope.

//EXECUTION PHASE - the code is executed, and function executions

//SCOPE CHAIN - Functions declared within functions

//LEXICAL SCOPE - Referencing functions declared elsewhere inside another function

//REASON NOT TO USE VAR: variable assignments are not read during the compiling phase
//'let' and 'const' are technically hoisted, but the JavaScript engine does not let them be references until they are 'initialized', or there value has been added durin gthe execution phase
