
let cat={type:"cat",sound:"meow"};
let dog={type:"dog",sound:"woof"};

const say=function(message){
    console.log(message);
    console.log(this.type+" says "+this.sound);
};

say.apply(cat,["what dose cat says"]);
say.apply(dog,["what dose dog says"]);


//bind method creates new function instance whose this value bounds to the object that u pass

//lets see exaample
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


let abc=car.start.bind(aircraft);

abc();
car.start.call(aircraft);

//we can able to call the method that dosent exixt in the aircraft by using bibd()


