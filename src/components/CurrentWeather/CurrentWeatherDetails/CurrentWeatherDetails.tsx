import './CurrentWeatherDetails.css';
type AppProps = {
  currentTemp: number;
  wind: number;
  visibility: number;
  humidity: number;
  dewPoint: number;
  weatherIcon: string;
};
function CurrentWeatherDetails(props: AppProps) {
  return (
    <div className="dk-weather-main-container__current-weather-body__details">
      <div className="dk-weather-main-container__current-weather-body__details__feels-like dk-weather-main-container__current-weather-body__details__element">
        <p>Ощущается как</p>
        <p>30</p>
      </div>
      <div className="dk-weather-main-container__current-weather-body__details__wind dk-weather-main-container__current-weather-body__details__element">
        <p>Ветер</p>
        <p>{props.wind}</p>
      </div>
      <div className="dk-weather-main-container__current-weather-body__details__visibility dk-weather-main-container__current-weather-body__details__element">
        <p>Видимость</p>
        <p>{props.visibility}</p>
      </div>
      <div className="dk-weather-main-container__current-weather-body__details__humidity dk-weather-main-container__current-weather-body__details__element">
        <p>Влажность</p>
        <p>{props.humidity}</p>
      </div>
      <div className="dk-weather-main-container__current-weather-body__details__preasure dk-weather-main-container__current-weather-body__details__element">
        <p>Точка россы</p>
        <p>{props.dewPoint}</p>
      </div>
    </div>
  );
}

export default CurrentWeatherDetails;
