function formatDate (timestamp) {
    let date = new Date (timestamp);
    let hours = date.getHours();
    if (hours<10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes<10) {
        minutes = `0${minutes}`;
    }
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function displayTempreature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement =document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement= document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    
    celsiusTemperature= response.data.main.temp

    temperatureElement.innerHTML =Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humiidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate (response.data.dt * 1000);
    iconElement.setAttribute("alt", response.data.condition.description);
}
 
function search(city){
let apiKey = "037o47a8760f1tc33c2fd2df9113d0b8";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(displayTempreature);
}
function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}
function displayFahrenheit (event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsius.classList.remove("active");
    fahrenheit.classList.add("active");
    let fahrenheitTemperatyre = (celsiusTemperature *9)/ 5 + 32;
    temperatureElement.innerHTML= Math.round(fahrenheitTemperatyre);
}
function displayCelsius(event){
   event.preventDefault(); 
   celsius.classList.add("active");
   fahrenheit.classList.remove("active"); 
   let temperatureElement = document.querySelector("#temperature");
   temperatureElement.innerHTML = Math.round(celsiusTemperature ); 
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
let city = "New York";
let apikey = "037o47a8760f1tc33c2fd2df9113d0b8"
let apiURl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiURl).then(displayTempreature);

let fahrenheit = document.querySelector("#fahr"); 
fahrenheit.addEventListener ("click", displayFahrenheit );

let celsius = document.querySelector("#celsi"); 
celsius.addEventListener ("click", displayCelsius );

search("Sydney");