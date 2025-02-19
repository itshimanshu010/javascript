let age = 26;
let score = "420abc";
let bid = null
let riskscore = "420"
let isActive = true

console.log(typeof age); 
//or
console.log(typeof(age));

console.log(typeof score); //string

//here is score value is proper number that is score = 420 
// then in valueInNumber variable it store like valueInNumber = 420
//but when the score(which is string is 420abc) then in valueInNumber will store NaN
//that is Not a Number

//Conversion for number: 

let valueInNumber = Number(score); //current score value is "420abc"
let valueInNumber2 = Number(bid);  //bid = null
let valueInNumber3 = Number(riskscore); //riskscore = "420"
let valueInNumber4 = Number(isActive);  

console.log(typeof valueInNumber); //number
console.log(valueInNumber) //NaN

console.log(typeof valueInNumber2); //number
console.log(valueInNumber2) //0

console.log(typeof valueInNumber3); //number
console.log(valueInNumber3) //420

console.log(typeof isActive); //number
console.log(valueInNumber4) //1


//Conversion for boolean
let isChecked = 1;

let booleanisChecked = Boolean(isChecked);
console.log(typeof booleanisChecked); //boolean
console.log(booleanisChecked)   //true because 1 = true ,(-number to number (!0)=true) "hello"= true,0 = false

//Conversion for String

let numberGoal = 33

let stringNumberGoal = String(numberGoal);
console.log(typeof stringNumberGoal)
console.log(stringNumberGoal)