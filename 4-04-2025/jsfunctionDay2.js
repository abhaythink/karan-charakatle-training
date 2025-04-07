//js recursive function it meanse function call it self;

//syntax
// function abc(){
//     ..
//     .
//     abc();
// }

//the recursive function allways need an condition to to stop itself

//example

console.log("Example 1 of recursive function");
function countdown(number){
    console.log(number);
    if(number>1){
        countdown(number-1);//it will call it self untill the condition get false
    }
}

countdown(3);

//Another example
console.log("Example 2 of recursive function");
let countdown1= function f(number){
    console.log(number);

    if(number>1){
    f(number-1);
    }
}

let newyear=countdown1;
countdown1=null;
newyear(10);

//calculate sum of n natural numbers 

console.log("Sum of n natural number using recursive function");
function sum(number){

    if(number<=1){
        return number;
    }

    return number+sum(number-1);

}

console.log(sum(10));


//factorial of number using recursive function

function fact(n){
    if(n<=1){
        return n;
    }

    return n*fact(n-1);
}
console.log(fact(5));



//Default parameteras in jsfunction
//when u dont pass any argument at the time of calling function function will take take the deault parameter value

function say(message="Hii"){
    console.log(message);
}

say();          //it will take default parameter value
say("hello");   //this will not