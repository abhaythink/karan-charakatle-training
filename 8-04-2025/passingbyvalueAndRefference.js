//all the premitive data type value are pass by value
//pass by value mense dose not change in the original one

// example of pass by value

let val=20;

function updateVal(a){
    a=10;
    console.log('inside the function '+a);
}

updateVal(val);
console.log('outside the function '+val);


//but in pass by refference all the non premitive data comes //in this value will change in original one
// lets see example of pass by refference

let arr=[1,2,3];
let arrCpy=arr;

arrCpy[1]=5; //it will update the value of index 1 in both the array cause of i am referencing the arr to the arrCpy

console.log(arr); 
console.log(arrCpy);

// to overcome this js provide us multiple way
//1st is sprad operator

let arr1=[1,2,3];
let arr1Cpy=[...arr1]; //it will just copy the elements

arr1Cpy[1]=10;
console.log(arr1);
console.log(arr1Cpy);

//2nd way using Assign() method

let arr2=[1,2,3];
let arr2Cpy=Object.assign([],arr2);

arr2Cpy[1]=20;
console.log(arr2);
console.log(arr2Cpy);

//3rd way using jeson.perse(jeson.signify(obj))
//use this when we have array of object

let arrObj=[
    {name:'jon',age:25},
    {name:'rio',age:40},
    {name:'chris',age:30},
    {name:'jimmy',age:21},
];

let arrObjCpy=arrObj;
// arrObjCpy[2].age=100; //this will update the age of 2nd index in both because the inner object is still refferencing the original value

// console.log(arrObj);
// console.log(arrObjCpy); 

//to overcome this we have 3rd way to update value withou upadating original value

let arrObjCpy1=JSON.parse(JSON.stringify(arrObj));

arrObjCpy1[2].age=100; //this will not update the value to the original one

console.log(arrObj);
console.log(arrObjCpy1); 