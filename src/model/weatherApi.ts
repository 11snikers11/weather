function getCoords(): Promise<GeolocationPosition> {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        res(location);
      },
      (locationError) => {
        rej(locationError);
      }
    );
  });
}

export async function getWeather() {
  const location = await getCoords();
  const { latitude: lat, longitude: lon } = location.coords;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=28aaa391622183125640aad2aafee6b6&lang=ru&units=metric`;
  const foreCasr = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=28aaa391622183125640aad2aafee6b6`;
  const weatherResponse = await fetch(url);
  const weather = await weatherResponse.json();
  return weather;
}
