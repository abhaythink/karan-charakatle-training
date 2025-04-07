console.log("Api start");

firstApi(nameFirstApi);


function firstApi(ResponseBackCall){
    setTimeout(()=>{
        ResponseBackCall({ 
            FirstApi:"call FirstApi"
        })
    },2000);
}
function secondApi(ResponseBackCall){
    setTimeout(()=>{
        ResponseBackCall({ 
            SecondApi:"call Second Api"
        })
    },2000);
}
function thirdApi(ResponseBackCall){
    setTimeout(()=>{
        ResponseBackCall({ 
            thirdApi:"call third Api"
        })
    },2000);
}
function fourthApi(ResponseBackCall){
    setTimeout(()=>{
        ResponseBackCall({ 
            fourthApi:"call FourthApi"
        })
    },2000);
}
function endingApi(ResponseBackCall){
    setTimeout(()=>{
        ResponseBackCall({ 
            EndingApi:"call EndingApi"
        })
    },2000);
}

// we have another way to handel this situatuion in which we can call the callback in each of the call back like mention in th follows example 
//we dont need to write in th callback hell ar pyramid pf doom 
function nameendingApi(ResponseBackCall){
    console.log(ResponseBackCall);

}

function nameFourthApi(ResponseBackCall){
         console.log(ResponseBackCall)
        endingApi((nameendingApi)
        )}

function nameThirdApi(ResponseBackCall){
    console.log(ResponseBackCall)
        fourthApi(nameFourthApi);
}

function nameSecondApi(ResponseBackCall){
    console.log(ResponseBackCall)
        thirdApi(nameThirdApi)
        
}
function nameFirstApi(ResponseBackCall){
    console.log(ResponseBackCall)
        thirdApi(nameSecondApi)
        
}

