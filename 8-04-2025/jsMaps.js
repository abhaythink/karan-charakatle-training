// Maps holds key value Pair where the key can bi any data type
// map mentains the insertion order

//Map Creation 
//Pasing by Array to it

const colour=new Map([
    ['red',1],
    ['bkack',2],
    ['blue',3],
    ['white',4],
    ['green',5]]
);


// console.log(colour);

//2nd way to create Map

const fruits=new Map;

fruits.set("Apple",100);
fruits.set("WaterMellon",200);
fruits.set("banana",300);
fruits.set("pineapple",400);

// console.log(fruits);

//Mapes are Objects
console.log(typeof(fruits));

//get The perticluer key value
console.log(fruits.get("Apple"));

//instanseof will retuen true if the given object is map  else false

console.log(fruits instanceof Map);

//fetures
//Map is directly iterable
//map has property of size
//keys can be any type of data
//orderd insertion of keys
//do not have default key

//Maps Methods

//clear() this fun will remove all elements from Map

colour.clear();
console.log(colour);

//delete() will remove specified key  element
colour.delete('red');// this will remove the key of red as well as value
console.log(colour);

//entries returns an entry object with the keyvalue pair in the map

for(const a of fruits.entries()){
    console.log(a);
}


//foreach it invokes the callback for each key value Pair

fruits.forEach(function(value,key)
{
    console.log(`${key} is key and ${value} is value`);
})


//groupBy it takes the 2 parameater 1st is array/Map and 2ns is Callback Function  and Returns the Map Object Of Group Elements
const vegitables=[
    {name:'potato',quentity:300},
    {name:'Flower',quentity:200},
    {name:'cucumber',quentity:500},
    {name:'Tomato',quentity:10}
    
];

// function mycallbaack({quentity}){
//     return quentity > 100 ? 'ok' : 'low' ;
// }

const res1=Map.groupBy(vegitables,({quentity})=> quentity > 100 ? 'ok' : 'low' );

console.log(res1.get('low'));


//has() return true or false depending upon the key avability in map

console.log(fruits.has('Apple'));
console.log(fruits.has('strawberry'));


//key() return the iterator object with the all keys
for(const key of fruits.keys()){
    console.log(key);
} //this will retuen all the key


// set() is also use to change the existing vlaues from the map

fruits.set('Apple',1000);
console.log(fruits);

//size() will return the size of the map
console.log(fruits.size);


//values() this will return the values of the map
let value='';
for(const val of fruits.values()){
    // console.log(val);
    value += val+" ";
}
console.log(value);