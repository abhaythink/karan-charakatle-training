"use strict";
let age = 20;
let Money = 1123211;
let Name = "jhon";
let bool = true;
let Money1 = 1123211;
let Name1 = "jhon";
let bool1 = true;
let level;
level = 11;
level = 'a';
console.log(level);
let values = [1, 2, 3];
let mixval = [1, 2, 's'];
let num = [1, 2, 3, 4];
;
let mysize = 4;
console.log(mysize);
function display(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 202,
    name1: "john doe",
    displsy: () => {
        console.log("hello " + employee.name1);
    }
};
employee.displsy();
let user1 = {
    id: 101,
    name: "chriss",
    disp: () => console.log("I am " + user1.name)
};
user1.disp();
function dispWeight(weight) {
    if (typeof weight === 'number') {
        console.log("i am in if part");
        return weight * 1;
    }
    else {
        console.log("i am in else part");
        return parseInt(weight);
    }
}
dispWeight(100);
dispWeight('10kg');
let text = {
    drag: () => console.log("i am draggable"),
    resize: () => console.log("I am Resizable")
};
text.drag();
text.resize();
let quantity = 10;
function printUpper(value) {
    console.log(value.toLowerCase);
}
function printUpper1(value) {
    if (value)
        console.log(value.toUpperCase());
    else
        console.log("hola");
}
printUpper1(null);
printUpper1('karan');
printUpper1(undefined);
//# sourceMappingURL=typeScriptDemo.js.map