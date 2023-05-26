import "./style.css";

const name = document.querySelector(".location");
const temp_c = document.querySelector(".temp");
const wind_kph = document.querySelector(".wind");
const feelslike_c = document.querySelector(".feels");
const country = document.querySelector(".country");
const humidity = document.querySelector(".humidity");

const condition = document.querySelector(".condition");
const conditionSymbol = document.querySelector(".condition-symbol");

async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=db7a213f0b714cebb18125709231905&q=${location}&aqi=yes`
    );
    const weatherData = await response.json();
    name.textContent = `${weatherData.location.name},`;
    temp_c.textContent = `${weatherData.current.temp_c} C`;
    wind_kph.textContent = `${weatherData.current.wind_kph} kph`;
    feelslike_c.textContent = `${weatherData.current.feelslike_c} C`;
    country.textContent = weatherData.location.country;
    humidity.textContent = weatherData.current.humidity;
    condition.textContent = weatherData.current.condition.text;
    conditionSymbol.src = weatherData.current.condition.icon;
  } catch (error) {
    console.log(error);
  }
}
let location = "london";
getWeather(location);
const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", () => {
  const locationInput = document.querySelector("#location-input");
  if (locationInput.value) {
    getWeather(locationInput.value);
  }
});
