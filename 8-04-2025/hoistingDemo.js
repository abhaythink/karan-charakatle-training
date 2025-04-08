// the concept is calling the fucntion or Variable before the decalring

console.log(a); //this will give undefined  because of globle execution context and initialised 
var a=10;
console.log(a);  //10

// if we try this with tehe let it will cause an error

// console.log(b); 
//  cause error cause in this line b is not initialised yet js engine dosent do with let
let b=20;

//function hoisting

let x=10,y=20;

const res=add(x,y);
console.log(res);//30

function add(a,b){
    return a+b;
}

//it will work with function that are created using function keyword
//lets try with anonymous function

// const res1=z;
// console.log(res1); this will thro error 

const z=((a,b)=> a+b);