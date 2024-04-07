// "use strict";

console.log(this);

function thisKeyword(){
    console.log(this);
}
thisKeyword();
//------------------------------
const bals = {
    firstName : "balaji",
    lastName : "k",
    printName : function(town , education){
        console.log(this.firstName + " " + this.lastName + " from " + town + " , " + education );
    }
    
}

const kows = {
    firstName : "kowsalya",
    lastName : "k"
}

function printNameArgs(...args){ // accept n number of arguments
    console.log(this.firstName + " " + this.lastName + " from " + args[0] + " , " + args[1] );
}

bals.printName("neyveli" , "Engineering")
bals.printName.call(kows , "neyveli" , "Engineering")
bals.printName.apply(kows , ["neyveli" , "engineering"])
const bindFun = printNameArgs.bind(kows , "neyveli" ,"engineering");

bindFun();
//-------------------------------

var a = 20;
const forArrow = {
    a : 10,
    x : function (){
        let a = 30;
        (()=>{
            console.log(this.a);
        })();
    },
    y : ()=>{
            console.log(this.a);
        }
}

forArrow.x();
forArrow.y();

//---------------------------------------

