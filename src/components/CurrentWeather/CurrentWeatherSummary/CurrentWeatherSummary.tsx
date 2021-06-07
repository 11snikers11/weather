import './CurrentWeatherSummary.css';
type AppProps = {
  currentTemp: number;
  weatherIcon: string;
};
function CurrentWeatherSummary(props: AppProps) {
  return (
    <div className="dk-weather-main-container__current-weather-body_summary">
      <div className="dk-weather-main-container__current-weather-body_summary__weather-img dk-weather-main-container__current-weather-body_summary__element">
        <img
          src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
        ></img>
      </div>
      <div className="dk-weather-main-container__current-weather-body_summary__temperature dk-weather-main-container__current-weather-body_summary__element">
        <p>
          {props.currentTemp}
          <sup>&deg;</sup>
        </p>
      </div>
      <div className="dk-weather-main-container__current-weather-body_summary__date dk-weather-main-container__current-weather-body_summary__element">
        {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}

export default CurrentWeatherSummary;
