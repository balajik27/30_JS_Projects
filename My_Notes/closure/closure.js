

function x(){

    for(var i=1;i<=5;i++){
        function forClosure(x){
            setTimeout(function (){
                console.log(x);
            }, x * 1000);  
        }
        forClosure(i);
    }    
    console.log("Balaji");
}
x();