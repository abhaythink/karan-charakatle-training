//Promises are used to handel async opn in javascript
//creation of promises
// Promises are immutable object we have controll on it 
//it is a placeholder which will field letter with the value  (until we receive valye from asynchronus opn) container for future value.
// we can resolve promise only once 

let b = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve("sucess");
    }
    else {
        reject("faield to attempt");
    }
})

b.then((message) => {
    console.log("this is in the then block", message);
}).catch((message) => { console.log('this is in the catch block', message) })
//inversion of controll we are passing the function inside the function  or another api we are giving the controll to another function 
// for avoiding thid we can use promise  
//we have garenty and trust in our whole transaction 
// prpomise state fulfiil,pending,rejected 
// promise is immutable 
//propertiess state and result(which holds peomise data that evenctually get fields)
//peonise an object that represent the evenctual completion of an sysnc opn


//in the concept of promise chaining we need to return a peomice to carry forword the data or promise
// it helps us to get out of the callback hel

//example of promise
const cart = ['shoes', 'shirts', 'kurtas'];


const p = createOrder(cart);

p.then(function (orderId) {
    console.log(orderId);
}).catch(function (err) {
    console.log(err.message);
})
function createOrder(cart) {

    const p = new Promise((resolve, reject) => {

        if (!validcart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = 12332;
        if (orderId) {
            resolve(orderId);
        }
    });
    return p;
}

function validcart(cart) {
    return 0;
}


//in this given example i have created a peomise and i resolve that promise
// i have also writtent the catch for handlig the error  

// if i am calling catch end of the promise chain it will handle all the upword error even the error is occuring in the one pf them i ll catch
//but if i have written any then block after the catch block it will get executed if there id no catch afte the then block



//promise .all([]) it use to runt all the promises at once it uses array and run it
// suppose we have 3 promise it will run 3 parallel api calls and get the result it will wait for all of them get finish
// if there will failuer of any one of them then promise.all() get failuer ** OP will be error and the error will be same as the failuer of that promise
// it will throw immiditly error when he get the 1st error ,it will not wait to complete other promises

let p1 = new Promise((resolve, reject) =>
    resolve("success for p1"));

let p2 = new Promise((resolve, reject) =>
    // reject("Faild for p2"));
    resolve("success for p2"));

let p3 = new Promise((resolve, reject) =>
    resolve("success  for p3"));

Promise.all([p1, p2, p3]).
    then((message) => {
        console.log(message)
    }
    )
    .catch((message) => {
        console.error(message)
    }
    );


// for omiting this we have another method for this called as promise.allSettled() in this a can able to get the result of who get executed properly even the error occured  
// for success the process will same as the promise.all() 
// it will wait for all promise settled untill the error already occurerd ex retuend value like [ val1,error,val2];

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("sucsess for promise1"), 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Faild for promise2"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success for promise3"), 1000);
});


Promise.allSettled([promise1, promise2, promise3])
    .then((message) => {
        console.log(message)
    }
    )
    .catch((message) => {
        console.error(message)
    }
    );



//promise. race([]) give us output who executes first and dose not wait for other to let complete
// this will return only single value not the array..!

let Promise1=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("Success..! For Promise 1"),5000)
    setTimeout(()=> reject("Failed..! For Promise 1"),5000);
    });
let Promise2=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("Failed..! For Promise 2"),8000);
    });
let Promise3=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("Success..! For Promise 3"),6000)
    });


Promise.race([Promise1,Promise2,Promise3])
.then((message)=> {
    console.log(message)
})
.catch((error)=> {
    console.log(error)
});



// console.log(res);



//Promise.any() wait for first success even the 1st promise is an error it waits for another to get setteld as sucess and retuen it
//if all promises are failed the result will be aggregateError array of all the promise error
//seeaking for 1st success Promise

let Pr1=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("Success..! For Promise 1"),5000)
    setTimeout(()=> reject("Failed..! For Promise 1"),5000);
    });
let Pr2=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("Failed..! For Promise 2"),8000);
    });
let Pr3=new Promise((resolve,reject)=>{
    // setTimeout(()=> resolve("Success..! For Promise 3"),6000)
    setTimeout(()=> reject("Failed..! For Promise 3"),6000);
    });

Promise.any([Pr1,Pr2,Pr3])
.then((message)=> {
    console.log(message)
})
.catch((error)=> {
    console.log(error)
});

