//real time example of async and await

const API_URL="https://api.github.com/users/karan-thinkitive";

async function handelREquest(API_URL){

// try {
    const data=await fetch(API_URL); // this will return response object that has body we can convirt it into json obj ,text or String  and it itself is an promise 
    const result= await data.json();// this is again a promise  and it will return jeson value
    console.log(result); 
    
    fetch(API_URL).then((res)=> res.json()).then((res)=> console.log(res)); // shorter way to call it but await is new way to handel 
// } catch (error) {
//     console.log(error)
// }
    
}

handelREquest(API_URL).catch((err)=>console.log(err));