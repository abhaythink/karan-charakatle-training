let age: number = 20;
// let age : string="younge";

// if(age<50)
//     age+=10;

// console.log(age);   

let Money:number=1123_211;
let Name:string="jhon";
let bool:boolean=true;

// if we are initilizing it then no need to add the type
let Money1=1123_211;
let Name1="jhon";
let bool1=true;

//any any type of value
let level; //type of any

level=11;
level='a';
console.log(level);


//Array 
let values=[1,2,3];// it will consider as number type
let mixval=[1,2,'s'];//it will cause error when we are passing it as an parameter and that function expeting only number array
let num: number[]=[1,2,3,4];//this will strict to use only the numbers


//enums
const  enum Colours{readonly=1,black,white,pink};
let mysize:Colours=Colours.pink;
console.log(mysize);


//function

function display(income:number){

    if(income<50_000)
        return income* 1.2;

     return income*1.3;
}

// console.log(display(100000)); 


//objects 

let employee:{
    id:number,
    name1:string,
    displsy:()=>void
}={
    id:202,
    name1:"john doe",
    displsy:()=>{
        console.log("hello "+employee.name1);
}
};

employee.displsy();



//type alice

type User={
    id:number,
    name:string,
    disp:()=>void
}

let user1:User={
    id:101,
    name:"chriss",
    disp:()=> console.log("I am "+user1.name)    
};

user1.disp();


//union
// in this we have function parameter as multiple type
// lets see the  example

function dispWeight(weight : number | string) : number {
    if(typeof weight === 'number')
        {
            console.log("i am in if part")
        return weight*1;
        }
    else {
        console.log("i am in else part")
    return parseInt(weight);
    }
}


dispWeight(100);
dispWeight('10kg');


//intersection type anothe way to have one of many type to the function parameter or varibale

type Draggable={
    drag:()=>void
} 
type Resizable={
    resize:()=>void
}
type UIWin=Draggable & Resizable;

let text:UIWin={
    drag:()=> console.log("i am draggable"),
    resize:()=> console.log("I am Resizable")
}

text.drag();
text.resize();

//litral type 
// when we have same type of value but the value can only that specific value ex 10 or 100 
//lets see

type Quantity=10|100;

let quantity:Quantity=10// this will strict u to use value only provided in Quentity type


//nullable type ts dose not allow us to pass parametear as  null or undefined 
// if we pass it it ll not able to ivoke that perticuler type function inside the function lets see

function printUpper(value:string){
    console.log(value.toLowerCase);
}
//if the parameater is null or undefined it will give error
// for that we need to handel it

function printUpper1(value:string|null|undefined){
    if(value)
    console.log(value.toUpperCase());

    else
    console.log("hola");
}

printUpper1(null);
printUpper1('karan');
printUpper1(undefined);

//optional chaining
// if we are getting value as null or undefined for ommiting 
// the error we use optional chaining to avoid error and it
// ll give undefined of the value is null or undefined

type Customer={
    birthday:Date
}
function getCustomer(id:number):Customer | null |undefined{

    return id === 0 ? null :{birthday:new Date()};
}

let customer1=getCustomer(0); 
console.log(customer1?.birthday)//this will give error if we are not using Optional