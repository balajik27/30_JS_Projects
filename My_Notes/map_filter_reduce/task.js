const github = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=neyveli&appid=7002d41d8e9106fbf16a0ee7d6b4d60b";

async function fetchData(){
    let data = await fetch(github);
    let dataJson = await data.json();


    // console.log(Object.values(dataJson));

    // const arrObj = Object.keys(dataJson).map(x => dataJson[x])
    // console.log(arrObj);


    console.log(dataJson);
}
fetchData();


