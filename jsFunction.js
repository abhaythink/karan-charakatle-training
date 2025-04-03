function add(a,b){
    return a+b;
}
let val=add(20,20);

console.log(add(10,20));

// function hoisting
showme();

function showme(){
    console.log("I am hoisting function");
}


//Annonymous Function

let fun=function(){
    console.log("I am anonymous Function");
}

fun();


//immediatly invoked function execution

(function(){
console.log("rapid function");
})();


//passing argument in anonymous function 
let person={
    name:"karan"};
(function(){
    console.log("Hi i am ",person.name);
})(person);

