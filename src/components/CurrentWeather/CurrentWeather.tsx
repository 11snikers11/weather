import './CurrentWeather.css';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';
import CurrentWeatherSummary from './CurrentWeatherSummary/CurrentWeatherSummary';

type AppProps = {
  currentTemp: number;
  wind: number;
  visibility: number;
  humidity: number;
  dewPoint: number;
  weatherIcon: string;
};
function CurrentWeather(props: AppProps) {
  return (
    <div className="dk-weather-main-container__current-weather-body">
      <CurrentWeatherSummary
        currentTemp={props.currentTemp}
        weatherIcon={props.weatherIcon}
      />
      <CurrentWeatherDetails {...props} />
    </div>
  );
}

export default CurrentWeather;
