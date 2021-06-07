import { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Header from './components/Header/Header';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import Layout from './HOC/Layout';
import { getWeather } from './model/weatherApi';

function convertToCelcius(tempInFahrenheit: number) {
  return (5 / 9) * (tempInFahrenheit - 32);
}

function App() {
  const [currentTemp, setCurrentTemp] = useState(0);
  const [wind, setWind] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [dewPoint, setDewPoint] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState('');

  const getWeatherData = async () => {
    const w = await getWeather();
    setCurrentTemp(w.current.temp);
    setWind(w.current.wind_speed);
    setVisibility(w.current.visibility);
    setHumidity(w.current.humidity);
    setDewPoint(w.current.dew_point);
    setWeatherIcon(w.current.weather[0].icon);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <Layout>
      <Header />
      <CurrentWeather
        currentTemp={currentTemp}
        wind={wind}
        visibility={visibility}
        humidity={humidity}
        dewPoint={dewPoint}
        weatherIcon={weatherIcon}
      />
      <WeatherForecast />
    </Layout>
  );
}

export default App;
