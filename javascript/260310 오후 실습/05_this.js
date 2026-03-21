const sayHelloNormal1 = function(){
    console.log(`name: ${this.name}`);
    console.log("this :", this);
};

const sayHelloArrow = () => {
    console.log(`name: ${this.name}`);
    console.log("this :", this);
};

const tetz = {
    name : "이효석",
    sayHelloNormal1,
    sayHelloArrow,
};

tetz.sayHelloNormal1();
tetz.sayHelloArrow();
