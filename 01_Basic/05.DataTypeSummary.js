// Primitive Data Types are Call by Value;
//Number, String, BigInt, Null, Symbol, Undefined, Boolean

//Non Primitive (Reference Type):
//Array, Object, Functions

//JavaScript is Dynamic Typed Language
//Because i dont need to define the data type 



//Number can be integer, float,decimal
const score = 100
const scoreValue = 100.3

const isActive = false
const outsideTemp = null
let userName; // undefined

//Symbol : used for uniquely defined
const id = Symbol('123');
const anotherid = Symbol('123');
console.log( id == anotherid); //false
console.log( id === anotherid); //false
//symbol work like that the value of both is not same 

//bigint
const bigNum = 78965412333n; //n tell that it is bigInt number

//Reference (Non Premitive)

//Array
const heros = ["hello", "namaste", "bonjour"];

//Object are being curly braces {} as key value pair
let myIntro ={
    name: "Himanshu",
    age: 26
}

//Function
function helloWorld(){
    console.log("hello World")
}
helloWorld();

//Storing function defintion in variable
const varFun = function(){
    console.log("Namaste Duniya")
}
console.log(varFun) //[Function: varFun]
console.log(typeof varFun) //function or function object
console.log(typeof heros) // object
console.log(typeof myIntro) //object