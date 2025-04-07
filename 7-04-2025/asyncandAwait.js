//we use async keyword before the function to create the async function
// async this function always return promise
// if u return any non promise value then this fun will wrap that value inside the promise and return it automatically

const p=new Promise((resolve,reject)=> resolve("Promise resolve value"));

async function getData() {
    // return "value";
    return p;

}

getData().then((res)=>console.log(res));

//async and await are used to handel promises

//await is a keyword is only used in async function  
//using await keyword we can able to resolve promise just writing before the promise
//in normal ways to resolve if the promise resolvation takinting time then java engine will do other work like
//if u are printing msg after the statement of promise resolve and promise taking time to execute then java engine will executes the another statement 
//in the async function browser will wait to complete the promise 1st 

//lets see the example 

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=> {resolve("promise async")},8000);
});
//normal way
function norDisplay(){
    p1.then((res)=>console.log(res));
    console.log("hi i am in normal function");// this will execute immeditly
}

// norDisplay();



//using await
async function display() {
  const a= await p1;// program will waits at this line
   console.log("Hii i am inside the display"); //this will print after the promise get resolve 
   console.log(a);
    
}

display();

//Another Variation of async 
async function display2() {
    console.log("hello world");
    const a= await p1;// program will waits at this line
     console.log("Hii i am inside the display-1"); //this will print after the promise get resolve 
     console.log(a);
    
     const b= await p1;
     console.log("Hii i am inside the display-2"); //this will print immidiate after resolving the promise 1st time because promise resolve only once       
     console.log(a);
  }

  display2();