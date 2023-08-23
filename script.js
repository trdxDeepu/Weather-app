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
    sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
    sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });

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

const getShanghaiWeather = async () => {
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",
      options
    );
    const data = await response.json();
    shanghai_cloud_pct.innerHTML = data.cloud_pct;
    shanghai_temp.innerHTML = data.temp;
    shanghai_feels_like.innerHTML = data.feels_like;
    shanghai_humidity.innerHTML = data.humidity;
    shanghai_min_temp.innerHTML = data.min_temp;
    shanghai_max_temp.innerHTML = data.max_temp;
    shanghai_wind_speed.innerHTML = data.wind_speed;
    shanghai_wind_degrees.innerHTML = data.wind_degrees;
    shanghai_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
    shanghai_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const getJapanWeather = async () => {
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Japan",
      options
    );
    const data = await response.json();
    japan_cloud_pct.innerHTML = data.cloud_pct;
    japan_temp.innerHTML = data.temp;
    japan_feels_like.innerHTML = data.feels_like;
    japan_humidity.innerHTML = data.humidity;
    japan_min_temp.innerHTML = data.min_temp;
    japan_max_temp.innerHTML = data.max_temp;
    japan_wind_speed.innerHTML = data.wind_speed;
    japan_wind_degrees.innerHTML = data.wind_degrees;
    japan_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
    japan_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const getBostonWeather = async () => {
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
      options
    );
    const data = await response.json();
    Boston_cloud_pct.innerHTML = data.cloud_pct;
    Boston_temp.innerHTML = data.temp;
    Boston_feels_like.innerHTML = data.feels_like;
    Boston_humidity.innerHTML = data.humidity;
    Boston_min_temp.innerHTML = data.min_temp;
    Boston_max_temp.innerHTML = data.max_temp;
    Boston_wind_speed.innerHTML = data.wind_speed;
    Boston_wind_degrees.innerHTML = data.wind_degrees;
    Boston_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
    Boston_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12' });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const getNewYorkWeather = async () => {
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
      options
    );
    const data = await response.json();
    NewYork_cloud_pct.innerHTML = data.cloud_pct;
    NewYork_temp.innerHTML = data.temp;
    NewYork_feels_like.innerHTML = data.feels_like;
    NewYork_humidity.innerHTML = data.humidity;
    NewYork_min_temp.innerHTML = data.min_temp;
    NewYork_max_temp.innerHTML = data.max_temp;
    NewYork_wind_speed.innerHTML = data.wind_speed;
    NewYork_wind_degrees.innerHTML = data.wind_degrees;
    NewYork_sunrise.innerHTML = new Date(data.sunrise).toLocaleTimeString('en-US', { hourCycle: 'h12' });
    NewYork_sunset.innerHTML = new Date(data.sunset).toLocaleTimeString('en-US', { hourCycle: 'h12'});



    console.log(data);
  } catch (error) {
    console.log(error);
  }
};




getShanghaiWeather();
getJapanWeather();
getBostonWeather();
getNewYorkWeather();
