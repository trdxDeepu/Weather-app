const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1bae564cbbmshdb5448aa4d875aep1b3288jsn6ad8c6569376",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWatherAPi = async (city) => {
  try {
    cityName.innerHTML = city;
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    );
    const data = await response.json();
    // cloud_pct.innerHTML = data.cloud_pct;
    temp.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    min_temp.innerHTML = data.min_temp;
    max_temp.innerHTML = data.max_temp;
    wind_speed.innerHTML = data.wind_speed;
    wind_degrees.innerHTML = data.wind_degrees;
    sunrise.innerHTML = data.sunrise;
    sunset.innerHTML = data.sunset;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWatherAPi(city.value);
});

getWatherAPi("Delhi");
