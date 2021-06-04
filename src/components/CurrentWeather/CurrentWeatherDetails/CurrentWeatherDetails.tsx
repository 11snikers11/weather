import './CurrentWeatherDetails.css';
function CurrentWeatherDetails() {
  return (
    <div className="dk-weather-main-container__current-weather-body__details">
      <div className="dk-weather-main-container__current-weather-body__details__feels-like dk-weather-main-container__current-weather-body__details__element">
        Ощущается как
      </div>
      <div className="dk-weather-main-container__current-weather-body__details__wind dk-weather-main-container__current-weather-body__details__element">
        Ветер
      </div>
      <div className="dk-weather-main-container__current-weather-body__details__visibility dk-weather-main-container__current-weather-body__details__element">
        Видимость
      </div>
      <div className="dk-weather-main-container__current-weather-body__details__humidity dk-weather-main-container__current-weather-body__details__element">
        Влажность
      </div>
      <div className="dk-weather-main-container__current-weather-body__details__preasure dk-weather-main-container__current-weather-body__details__element">
        давление
      </div>
    </div>
  );
}

export default CurrentWeatherDetails;
