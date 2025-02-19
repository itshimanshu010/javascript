console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//Comparing different data type value
console.log("Comparsion different data type value")
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false // ==equality check
console.log(null >= 0); // here it is true because comparsion >= convert null to a number which treat as 0

console.log(undefined == 0) //false
console.log(undefined < 0) //false
console.log(undefined > 0) //false

//Strict Check === check value and datatype

console.log("2" === 2); //false
console.log(2 === 2); //true