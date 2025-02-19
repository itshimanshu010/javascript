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


// Operations

let value = 5
let negValue= -value;
console.log(negValue) //-5

let str1 = "Hey "
let str2 = "Himanshu"
// You can only add , but not subtract a string

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

// So here when the first one is string then all other should also be consider as string
//when first one string is not string then it perform the operation then be string if there is any string

console.log(+true) //1 ,true is boolean so there is not increment
//  console.log(true+) //not possible

let num1,num2,num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1,num2,num3) //4 4 4

let counterPoint = 50
counterPoint++; //postfix
console.log(counterPoint) //51


let counterPoint1 = 50
++counterPoint1; //prefix
console.log(counterPoint1) //51

console.log(`So this ${counterPoint} What we talking`)