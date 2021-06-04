import './CurrentWeather.css';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';
import CurrentWeatherSummary from './CurrentWeatherSummary/CurrentWeatherSummary';
function CurrentWeather() {
  return (
    <div className="dk-weather-main-container__current-weather-body">
      <CurrentWeatherSummary />
      <CurrentWeatherDetails />
    </div>
  );
}

export default CurrentWeather;
