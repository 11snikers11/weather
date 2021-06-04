import { useEffect } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Header from './components/Header/Header';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import Layout from './HOC/Layout';
import { getWeather } from './model/weatherApi';

function App() {
  const getWeatherData = async () => {
    const w = await getWeather();
    console.log(w);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <Layout>
      <Header />
      <CurrentWeather />
      <WeatherForecast />
    </Layout>
  );
}

export default App;
