function displayTempreature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement =document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement= document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML =Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humiidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apikey = "d154fc7005a41959d58d6c5664de965a";
let apiURl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apikey}&units=metric`;
axios.get(apiURl).then(displayTempreature);