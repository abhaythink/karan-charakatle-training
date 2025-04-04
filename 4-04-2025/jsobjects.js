//we can create object by using {} bracess

let person={}//

person={
    name:"abc",
    age:32
}

//we can acess the property of object using .notation

console.log(`hi i am ${person.name} and ${person.age} years old`);

//accesing the property by using [] array type notations

console.log(person['name']+" and age is "+person['age']);

//if ur propetry has any space like "room no" then u ll need to access the property using array notations .notation will ocure error




//u can add new propertry in ur exsting object lets see
person.email=`${person.name}@gmail.com`;
console.log(person);


//removing property from exsting object


delete person.age;// removing age property          

console.log(person);


//to check the perticuler property exist or not by using the in keyword it will return true false

console.log('email' in person);   //true
console.log('id' in person);      //false


//adding funcction as property 

person.greet=()=>console.log(person.name);

person.greet();

// we can also add function directly inside the object 

person={
    name:'abc',
    age:22,
    greet:function(){
        console.log('hello '+person.name);
    }
};

person.greet();

//2nd way to add function inside object is

person={
    name:'abc',
    age:22,
    greet(){
        console.log('hello 2nd way to add function '+this.name);
    }
};
person.greet();


//constructor function by using new keyword

function Person1(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

let person2=new Person1("jhon",'buck',50);

console.log(person2);

//adding methods to js constructor function

function Test(id,name){
    console.log(new.target);
this.name=name;
this.id=id;

this.gettestdetails=()=>{
    console.log(`id is ${this.id} and name is ${this.name}`);
};
}
let test1=new Test(101,'lastSem');
test1.gettestdetails(); 


//if we not use new keyword then it will get treated as normal function and unable to get the property and function


let test2= Test(102,'sem2');//undefined

let test3= new Test(103,'sem4');//return the refferene to the Test

// we can force to use new keyword or throw the error

function NewTest(id,name){
    if(!new.target){
        throw('cannot be called without new keyword');
    }
    // console.log(`id is ${this.id} and name is ${this.name}`);
};

// let abc=NewTest();// it will throw error 'cannot be called without new keyword';


//Also we can do we can return object using new keyword if we dont call it by new keyword
function NewTest1(){
    if(!new.target){
        console.log('test create withous new keyword');
        return new NewTest();
    }
    // console.log(`id is ${this.id} and name is ${this.name}`);
};

let newtest1= NewTest1();


