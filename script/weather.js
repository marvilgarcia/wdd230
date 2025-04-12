const apiKey = "9f61c063d601f76dd76cc438f27d3276";
const city = "Santo Domingo";
const units = "metric";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather data fetch failed");
        const data = await response.json();

        document.getElementById("city-name").textContent = ` ${data.name}`;

        document.getElementById("current-temp").textContent = `${data.main.temp.toFixed(1)}°C`;
        const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weather-icon").setAttribute("src", iconURL);
        document.getElementById("weather-icon").setAttribute("alt", data.weather[0].description);
        document.getElementById("weather-desc").textContent = data.weather[0].description;
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

fetchWeather();

