const apiKey = "39645ad3c51187770967623251adc1d6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchField = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");
const weatherShow = document.querySelector(".weather");
const errorAlert = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    errorAlert.style.display = 'block';
    weatherShow.style.display = 'none';
  }
  else {
      var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == 'Clouds') {
    weatherIcon.src = "/weather-app/assets/images/clouds.webp";
  }
  else if (data.weather[0].main == 'Clear') {
    weatherIcon.src = "/weather-app/assets/images/clear.webp";
  }
  else if (data.weather[0].main == 'Drizzle') {
    weatherIcon.src = "/weather-app/assets/images/drizzle.webp";
  }
  else if (data.weather[0].main == 'Mist') {
    weatherIcon.src = "/weather-app/assets/images/mist.webp";
  }
  else if (data.weather[0].main == 'Rain') {
    weatherIcon.src = "/weather-app/assets/images/rain.webp";
  }
  else if (data.weather[0].main == 'Snow') {
    weatherIcon.src = "/weather-app/assets/images/snow.webp";
  }
  weatherShow.style.display = 'block';
  errorAlert.style.display = 'none';
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchField.value);
});
