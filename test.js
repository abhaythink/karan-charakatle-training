let users = [
    {
        firstName: 'Abhay'
    },
    {
        firstName: 'Karan'
    }
    ,
    {
        firstName: 'Pratik'
    }
]


// iterate

// choice

// original foreach
// 

// let users = [
//     {
//         firstName: 'Abhay',
//         email : "abhay@gmail.com"
//     },
//     {
//         firstName: 'Karan',
//         email : "Karan@gmail.com"

//     }
//     ,
//     {
//         firstName: 'Pratik',
//         email : "Pratik@gmail.com"

//     }
// ]

users.forEach(user=>{
   
   user.email=`${user.firstName}@gmail.com`;
}
);
console.log(users);