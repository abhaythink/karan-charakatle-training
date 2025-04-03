//we use diffrent keyword to declare vaiable in js 
// like var,let,const

var b;
let l;
const a=10;     // for this type we need to initilize value immediate

//js is case sencitive programing language 
//so 'Message' and 'message' will be different

//naming of variable can be start with any letter ,Unserscore(_) and Doller($), 
// variable name cannot be  reserved keyword

// is an dynamically type language so we dont need to specify the data type

//js allow us to declare multiple varible in single line by using coma sapreated we can also assign diffrent type value too
var demo1=10,demo2="hello";


//we can also change the value of the variable that is alraday initilized

demo1="reassignvalue";
let message="hello";
message=1000;
console.log(message);

//undefined and undeclared variables
//if we are declaring variable and not assigning value to it it will assign as an "undefined"

let abc;
console.log(abc); //op : undefined

//if  we are using a varibake that is not declered it will causes refference error as varible not defined

// console.log(help); //op : ReferenceError: help is not defined



//Constant hold value that dosent change  for using constant use keyword const you need to assign value to it immediately

const constexample="ConstVAriable";

//we cannot change the the pervious value to new it will give error as "TypeError: Assignment to constant variable"

constexample="NewVAlue"; //op:TypeError: Assignment to constant variable.