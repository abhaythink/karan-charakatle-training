// js Strings

//we can assign sttring value by using Double quotes or single quotes also backtick `

let a='karan';
let b="amir";
let c=`soham`;

console.log(a,b,c);

c=`soham i' am 20 old`
console.log(c);



// escaping character
// let text = "We are the so-called "Vikings" from the north."; use back slash
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);


//Getting length of string 

console.log(c.length); //18


//accesing charecter 
console.log(c[3]);    //a

//accesing last charecter 
console.log(a[a.length-1]);  //n


// for concatinating the string use += operator
let d = "indian"
d+=a+b;
console.log(d);

// TO CONVERT NOT STRING TO STRING 

let e= false;
    // e.toString();
 String(e);
    console.log(e);

let f=e.toString();
console.log(f);
//convetring back to boolean

let back=Boolean(f);
console.log(back);

// String Comparing  we can compare string using comparisam operator

let result = 'a'<'B';
console.log(result);



//javaScript as object  using new keyword

let y=new String("sam");
let z=new String("sam");
console.log(z==y); //false

let x="sam";

console.log(x==y); //true

console.log(x===y); //false 


//String Methods 
 let len=c.length;
 console.log(len); //18

//CharAt() it will return value of that pertivuler index
console.log(c.charAt(3)); //a


//CharCodeAt() it will retuen the ASSCI code of that char
console.log(c.charCodeAt(3)); //97

//at() return the index char
console.log(x.at(1));  //a

//property access it dose look like array but not
let test="abc";
test[0]='A';
console.log(test); // it will not give error but there will no change in original string

// slice()


let sl= "apple, banana , chiku";

let part=sl.slice(7,13);

console.log(part);

console.log(sl.slice(7)); //it will remove char upto given index 

console.log(sl.slice(-7)); //it will  start the indexing from end til the given index and slit that part;

console.log(sl.slice(-7,-13)); //it will remove char between given index retuen rest part;



//Substring

console.log(sl.substring(7,13)); // it will treat the input value as o as start and end as the size


//Substr() it is similer to slice but diffrence is that 2 nd argument is treated as lenth of substring
console.log(sl.substr(7,7));

//if u ommit the 2nd parameater it will slice rest of part
console.log(sl.substr(7));


//toupperCase  and Tolowercase

console.log(sl.toUpperCase());
console.log(sl.toLowerCase());


// concat to join new string to existing string

let old="Amay";

let new1 ="Godbole"
let text1=old.concat(" ",new1); 
console.log(text1); //Amay Godbole


//trim

let text3 = "     Hello World!     ";
let text2 = text3.trimStart();  // removes the starting whitespaces spaces; 
console.log(text2);


let text4= text2.trimEnd(); // removes the ending whitespaces spaces; 
console.log(text4);

//pad

let test1="4";
let test2=test1.padStart(5,"0"); //1st Parameter will allocate the lenth to the string and 2nd will take place of additionally added spaces

console.log(test2); //00004

let test3=test1.padEnd(5,"X");//opposit to the Pad start 
console.log(test3);


//repeat
console.log(old.repeat(2));

//replace

let replacedemo="hello world  !";
console.log(replacedemo.replace("world","home")); // it will reolace the 1st parameter to the new parameter in the string; this is case sencitive

//use /i to insencitive
console.log(replacedemo.replace(/WORLD/i,"home"));


//replaceAll()

let text5 = "I love cats. Cats are very easy to love. Cats are very popular";
text5 = text5.replaceAll(/Cats/g,"Dogs");
text5 = text5.replaceAll(/cats/g,"dogs");

console.log(text5);


//String to array concerting

console.log(text5.split(" "));