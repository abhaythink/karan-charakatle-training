//closures are the functions that has the ability to remember and the access the variable from its outer scope /lexical

// lets se e the example

function x(){

    let a=10;
    function y(){
        console.log(a);
    }

    a=100;
    return y;
}

let z=x();// here iam assigning the y function to the z

//

z(); // here z hase the refference of the y and y loging the value of a 
// and y dose not have that value of a ,a was declare in the x  and x was already executed and poped from callstack
// so here might occure the problem of undefined of 'a' 
// but cause of closure it will remember the access and scope of the a and he will get the value from it  