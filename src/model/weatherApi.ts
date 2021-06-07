function getCoords(): Promise<GeolocationPosition> {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      location => {
        res(location);
      },
      locationError => {
        rej(locationError);
      }
    );
  });
}

interface currentWeather {
  current: weatherData;
}
interface weatherData {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  visibility: number;
  wind_speed: number;
  icon: string;
  weather: Array<weatherIcon>;
  daily: Array<dailyWeather>;
}
interface weatherIcon {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface dailyWeather extends weatherData {
  tempDaily: temp;
  feelsLikeDaily: feelsLike;
}
interface temp {
  day: number;
}
interface feelsLike {
  day: number;
}

export async function getWeather() {
  const location = await getCoords();
  const { latitude: lat, longitude: lon } = location.coords;
  const forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=28aaa391622183125640aad2aafee6b6`;
  const weatherResponse = await fetch(forecast);
  const weather: currentWeather = await weatherResponse.json();
  return weather;
}

//http://openweathermap.org/img/wn/${icon}.png
