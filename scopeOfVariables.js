// can be reassigned let and var //
var name='subodh';
name='karan';
console.log(name); //karan

let age=21;
age=22;
console.log(age); //22

// can be reassigned let and var //
var demo1='ogval';
var demo1 ='newval';
console.log(demo1); //newval


//let dose not allow to redeclare
let demo2=123;
// let demo2=321;  this is giving error


//scope 

function demo(){
    let a=10; // locally scope or functional scope
    console.log(a);
}

demo();
// console.log(a);  // not accesible outside the function error



// for var if u have declared the varibale in side the function then it is not accesible out side the function
function varscope(){
    var demovar=10;
    console.log(demovar); //this is not accecible out side the function
}
varscope();
//console.log(demovar);      //error will ocur
// if u have declared it in block like if else ,loop,switch statements it will be globle scope
if(true){
    var game="Sonic"; //this will accesible outside the  block aslo
    console.log(game);
}
console.log(game);
//var is only locally scope inside the function 

//  this behaviour will generate ambiguity lets see

var city="Nagpur";
console.log(city); //this will print 'Nagpur'
if(true){
    var city="Pune";
    console.log(city); //this will print 'Pune'
}
console.log(city);  // this will print 'pune' even the log statement is outside the block for this we need to use let