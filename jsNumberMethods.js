//toString() this will chamge the number data type to string type

let number1=10;

console.log(typeof(number1)); // op as number

number1.toString();
console.log(typeof(number1.toString())); // op as string

console.log((100+23).toString);


(123).toString();



//toExponential()  this will decide how many character will display after the floting point and it also round that number .

let number2=9.123;
console.log(number2.toExponential(2));  //op : 9.12e+0;
console.log(number2.toExponential(0));  //op : 9e+0;
console.log(number2.toExponential(4));  //op : 9.1230e+0;
console.log(number2.toExponential(6));  //op : 9.123000e+0
 

//ToFixed() rounds the numer to the given number

let number3=9.656;
console.log(number1.toFixed(0)); // op : 10
console.log(number1.toFixed(2)); // op : 10.00
console.log(number1.toFixed(4)); // op : 10.0000
console.log(number1.toFixed(6)); // op : 10.000000


// valueOf() returns the number of number

let number4=123;
console.log(number4.valueOf()); //OP : 123
console.log((111).valueOf()); //OP : 111
console.log((100+20).valueOf()); //OP : 120


// number() methods for converting variables to number
console.log(Number(true)); // OP: 1
console.log(Number(false)); // OP: 0
console.log(Number("-10")); // OP: 10
console.log(Number("10")); // OP: 10
console.log(Number(" 10")); // OP: 10
console.log(Number(" 10 ")); // OP: 10
console.log(Number(" 10")); // OP: 10
console.log(Number("10.33")); // OP: 10.33
console.log(Number("10,02")); // OP: nan
console.log(Number("10 20")); // OP: nan
console.log(Number("Karan")); // OP: nan


//number() can aslo convert the date into number
let x=new Date("2017-09-30");
console.log(Number(x));
 


// PerseInt() methods it returns the first number , allows the white spaces

console.log(parseInt("-10")); //OP :-10
console.log(parseInt("10")); //OP :10
console.log(parseInt("10.33")); //OP :10
console.log(parseInt("30 20 50")); //OP :50
console.log(parseInt("40 years")); //OP :30
console.log(parseInt("years 20")); //OP :nan



// parseFloat same as parseint just it also return the floting number 

console.log(parseFloat("10.33")); //OP :-10.33


//number object methods 

//Number.isInteger()
//Number.isSafeInteger()
//Number.parseInt()
//Number.parseFloat()

let val=20;
console.log(Number.isInteger(val)); //OP :true
console.log(Number.isInteger(-10)); //OP :true
console.log(Number.isInteger("abs")); //OP :-10


//isSafeInteger() it represented as double precision number safe integers are -(2 raise 53-1) to + (2 raise 53-1)

console.log(Number.isSafeInteger(10)); //true
console.log(Number.isSafeInteger(12345678901234567890)); //true


//Number.parseInt and Number.parseFloat is the same to globle methods


