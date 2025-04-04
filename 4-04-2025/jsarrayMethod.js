//array methods some,evry,find,includes,map,filter,reduce,foreach
//some will return bool

//foreach
let colours=['red','white','blue','black','purple','voilet'];

colours.forEach((colour)=>{
    console.log(colour);
});


//some it will return boolean value if it found any of true it ll return true if he found all false it will return false

let isanyfound=colours.some((colour)=>{
   return colour == 'red'; 
})
console.log(isanyfound);// true


let hasany=colours.some((colour)=>{
    return colour == 'green'; 
 })

 console.log(hasany);//false



// find if he finds that item he ll retuen that element else undefined

const founditem=colours.find((colour)=>{
    return colour=='black';
});

console.log(founditem);


//every if function ll find all true then it ll retuen true eles it ll retuen false


let num=[10,20,30,100,1000];

const getall=num.every((n)=>{
    return n<=1000;//true if condition was <999 then it wll false
});

console.log(getall);

//reduce this wiil sum the specific column in the array and return it 1st parameter will be the ur sum value and 2nd will ur array item 

const total=num.reduce((total,item)=>{
    return item+total;
},);
console.log(total);


//include return the true or false based on the item is present or not

let includetwo=num.includes(200); //flase

console.log(includetwo);