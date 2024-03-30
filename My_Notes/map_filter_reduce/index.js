arr = [3,2,4,5,1,4,5]
function double(x){
    return x * 2; // return value
}

function findEven(x){ 
    return x%2===0; // return true or false / numbers 0- false - others are true.
}
function findOdd(x){
    return x%2;
}

const forMap = arr.map(x => x*2);
const forFilter = arr.filter(findEven);
const forFilter2 = arr.filter(x => x%2);
console.log(forMap);
console.log(forFilter2);


const users = [
    {firstName : "Balaji" , lastName : "k" , age : 20},
    {firstName : "Kows" , lastName : "k" , age : 23},
    {firstName : "Vennila" , lastName : "k" , age : 20},
    {firstName : "Pownambal" , lastName : "k" , age : 56}
]

const age = users.reduce(function(arr , curr){

    if(arr[curr.age]){
        arr[curr.age] = ++arr[curr.age];
    } else {
        arr[curr.age] = 1;
    }
    return arr;
}, {})

console.log(age);

const firstname = users.filter(x =>{
    return x.age<30
} )
.map(x => x.firstName)

const firstname_reduce = users.reduce(function(name , curr){
    // let index = 0;
    if(curr.age<30){
        name[name.length++] = curr.firstName;
        // name.push(curr.firstName);
    }
    return name;
},[])


console.log(firstname_reduce);