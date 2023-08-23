const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1bae564cbbmshdb5448aa4d875aep1b3288jsn6ad8c6569376",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function getWatherAPi(city) {
  try {
    cityName.innerHTML = city;
    const response = await fetch(url, options);
    const data = await response.json();
    cloud_pct.innerHTML = data.cloud_pct;
    temp.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    min_temp.innerHTML = data.min_temp;
    max_temp.innerHTML = data.max_temp;
    wind_speed.innerHTML = data.wind_speed;
    wind_degree.innerHTML = data.wind_degree;
    sunrise.innerHTML = data.sunrise;
    sunset.innerHTML = data.sunset;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// submit.addEventListnear("click", (e) => {
//   e.preventDefault();
//   getWatherAPi(city.value);
// });

getWatherAPi();
