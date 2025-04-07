//call function are thos function where we pass the function in fucntion parametear asynac
//we can use callback function in assynac function where we need to wait for perticuler block of function

function sayhello(callback){
 
    setTimeout(() => {
        console.log("i am inside setTimeout..!");
        callback();
    }, 2000);
   
}

function saygood(callback){
 
    console.log("i am inside say good");
       callback();
   
}
function intro1(){

    console.log("Hi this is intro 1");
}

function intro2(){
    console.log("hi this is intro 2");
}


sayhello(intro1);
saygood(intro2);




//2nd example 

function mycalculator(a,b,callback){
    console.log('inside the mycalculator..!');
    let sum=a+b;
    console.log("Calling the callback");
    callback(sum);
}

function mydispaly(sum){
    console.log("inside the callback(mydisplay)");
    console.log(sum);
}


mycalculator(5,5,mydispaly);


//removing the neg num using call back


const nums=[1,2,-3,4,-5,-6,7,-8,9,-10];

const posnum=removenegnum(nums,(x)=> x>=0);

function removenegnum(nums,callback){
    const myArray=[];
    for(const x of nums ){
        if(callback(x)){
            myArray.push(x);
        }
    }

return myArray;
}

console.log(posnum);

