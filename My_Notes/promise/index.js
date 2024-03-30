

const github_api = "https://api.github.com/users/balajik27"

const prom = fetch(github_api);


// console.log(promise);
prom.then(function (response){
    console.log(response);
})