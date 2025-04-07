//swapping variable value using destructueeing

let a=1;
let b=2;

[a,b]=[b,a];

console.log(a);
console.log(b);


//arraya destructuring demo
//swapping elements in to array

let colours=['red','green','blue','black','white'];

[colours[0],colours[4]]=[colours[4],colours[0]];

console.log(colours);

//we can assign array elemts to variable

const [firstcolor,secondcolor,thirdcolor, ...extra]=colours;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);

//we can assign remening elemnts to an array
console.log(extra);

//object destructuring by using curly brases {}

let person={
    firstname:'kararn',
    lastname:'charakatle',
    age:'21',
    job:'developer'
};

// let {firstname,lastname,age,job}=person;
// console.log(`${firstname} ${lastname} ${age} ${job}`);

let person2={
    firstname:'sumit',
    lastname:'jhon',
    age:'32'
};

const {firstname,lastname,age,job="unemployeed"}=person2;
console.log(`${firstname} ${lastname} ${age} ${job}`);


//we can also destruct the object in function parameater

function showperson({firstname,lastname,age,job="unemployeed"}){

    console.log(`i am ${firstname} ${lastname} and ${age} years old ,my occupation is${job}`);
}


showperson(person);
showperson(person2);