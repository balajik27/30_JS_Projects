
const p = new Promise((resolve , reject) => {
    setTimeout(()=>{
        resolve("Hello balaji from Promise1")
    } , 2000);
})
const p2 = new Promise((resolve , reject) => {
    setTimeout(()=>{
        resolve("Hello balaji from Promise2")
    } , 6000);
})

// function getData(){
//     p.then((res) => console.log(res));

//     console.log("hello world")
// }

// getData();

async function handleAsync(){

    //parallely timer starts for all the promises if first promise have large time than second promise , then second promise also should wait for first one to get finish and both gives result.
    // if first one time lesser than second then first and second timer runs parallely and once the first one finishes it immediately gives the result , then second one gives result

    // first ( 5sec) - 1, 2, 3, 4, 5 
    // second (8 sec)- 1, 2, 3, 4, 5, 6, 7, 8
    // parallely timer starts and gives result first one and then after 3 seconds second one.

    // first (10sec) = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    // second (5sec) = 1, 2, 3, 4, 5.

    // second one finishes before first one but it will not return the result , wait for first one to complete then both give at a time.

    const pr = await p; //while seeing await it supend or remove handleAsync() from call stack and once the result is got , then again put inside the call stack and run the code where it left.
    console.log("Hello world async 1")
    console.log(pr)
    
    const pr2 = await p2;
    console.log("Hello world async2")
    console.log(pr2)
}

handleAsync();


//handleAsync()
//call stack


const API_URL = "https://api.github.com/users/balajik27";

async function githubCall(){

    const myGithub = await fetch(API_URL);
    const myGithubJson = await myGithub.json();
    console.log(myGithubJson);
}
async function githubCall(){
    try{
        const myGithub = await fetch(API_URL);
        const myGithubJson = await myGithub.json();
        console.log(myGithubJson);
    } catch(err) {
        console.log(err);
    }
}
githubCall();
// githubCall().catch( err => console.log(err)); // returns the promise