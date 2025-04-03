// boolean have 2 values true/1 or false/0

//js provides us Boolean() to cast not pboolean value to boolean value

let a="error";
let haserror=Boolean(a);

console.log(haserror); //true


//also we can use with if else block

if(a){   // a have some value thts why is becaming true
console.log(a);
}

// if the make the string as empty it will not act as the same
if(""){
    console.log(a);
}