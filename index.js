

function showCity (response){
    let cityInput = document.querySelector("#search-form");
    let  h1 = document.querySelector("#city");

}


let apikey = "2f956f5ab16ab6efbf104146e5940f9d";
let apiURl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
 axios.get(apiURl).then (showCity);