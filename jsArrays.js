let scores1=new Array();
let scores=new Array(10); //it will create array with initial size
let scores3=new Array(10,20,30,40,50); //this will create array of 5 element
let scores4=Array('red'); //this will create the array of 1 elemt 'red'; 
//js also allow to omit new key word

 let sign=Array();


 // more prefered way to create array is litral notation  
 let colours=['red','black','blue'];

 //for Empty array
 let demoArray=[];


 //accesing array elemnts

 console.log(colours[2]); //blue


 //changing the value of alrady assignd index value

 colours[2]="Purple";

console.log(colours[2]); //purple


//Array Length

console.log(colours.length);




//basic opn on arrays

//Appending 
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea'); //apend element at the end

console.log(seas); 


//Adding elemet at the start

seas.unshift("indian sea");// it adds elements at the start of the array 
console.log(seas);

//Removing the last element

seas.pop();  //removes the last elements and also return that element
console.log(seas);


//Removing the element from the begining of the array

seas.shift();//removes the fist elements and also return that element
console.log(seas);


//to get the index of perticuler value

console.log(seas.indexOf('North Sea')); //2


//To check the given parameate is array or not

console.log(Array.isArray(seas));


//Array map function this will work on each element of array and create new array

const numbers = [1, 2, 3];

console.log(numbers.map((n)=> n*2 ));


// Array filter fnction this will filterout the given array on perticuler condition 

console.log(numbers.filter((n)=> n>=2  ))



//reduce it adds the all elements in the array
// const reducer = (tem) =>  it * item.price;
const total = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
console.log(numbers.reduce(reducer,0)); /// Painding