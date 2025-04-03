//EPSILON IS THE difference between the 1 and the smallest floting point number than 1  
let x=Number.EPSILON;
console.log(x); //2.220446049250313e-16


//Number.Max_Value represent the largest posible number

console.log(Number.MAX_VALUE);   //1.7976931348623157e+308


//Number.MinValue  

console.log(Number.MIN_VALUE);  //5e-324


//positive infinity

let val=Number.POSITIVE_INFINITY;
console.log(val);    //Infinity

console.log(1/0);   //infinity



//negitive-Infinity
let val1=Number.NEGATIVE_INFINITY;
console.log(val1);   //-Infinity

console.log(-1/0);    //-/Infinity



//NaN Not A Number

let val2=Number.NaN;
console.log(val2); //nun

console.log(10/ "abc"); //nun
