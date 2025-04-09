
function a(){
    console.log("i am in hii a")
}

function b(){
    console.log("i am in helo b")
}



a();
b();

let car={
    speed:10,
    start:function(message){
        console.log('starts with'+this.speed+"km/h");
    }
};

let aircraft={
    speed:20,
    fly:function(message){
        console.log('flying');
    }
};


// let abc=car.start.bind(aircraft);

// abc();
car.start.call(aircraft);