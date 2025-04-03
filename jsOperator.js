//type of operator in js
//1 arithmatic operator(+,-,*,/,%);
//2. Assignments operator(=)
//3. unary operator();
//4.Comparison operato(<,>,<=,>=,==,!=)
//5. Logical operator(!,||,&&)


//Arithmatic Operator
console.log(10+20);
console.log(10*5);
console.log(10/2);
console.log(10%5);

//Assignment operator
let a=10;
let b=a;


//unary operator

let c=10;
let d= +c; //converts the string type value to number

console.log(d);

let e=++c; //pre-incriment first increment then assign;
console.log(c);
// console.log(c++);
let f= c++; //first assignt then increment if we are using this vaiable agian then it will give updated value
console.log(f);
console.log(c);
console.log(--c);
console.log(c--);

//Comparison operator
console.log(10<5); //false
console.log(10>5); //true
console.log(10<=5); //flase
console.log(10>=5); //true
console.log(10==5); //flase
console.log(10==10); //true
console.log(10!=5); //true



//logical Operator undefined ,null  ,NaN,empty string are true
console.log(!undefined); //true
console.log(!NaN); //true
console.log(!""); //true
console.log(!0); //false
let str=new String();
console.log(!str); //false
console.log(!false); //true


//&& Operator in this only one condition will be act as true
console.log('-----------');
let eligible=true,required=true,status1=false;
console.log(eligible && required);

console.log(eligible && status1); //flase

//even the one condition is flase result will false



//Turnary operator

let age=18;
let message;

age>=18? (message="ready to vote") :(message="Not ready to work");

console.log(message);

//
 
function add(a,b){
    return a+b;
}
let val=add(20,20);

console.log(add(10,20));