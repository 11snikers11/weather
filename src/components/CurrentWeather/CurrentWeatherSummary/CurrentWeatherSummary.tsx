import './CurrentWeatherSummary.css';
function CurrentWeatherSummary() {
  return (
    <div className="dk-weather-main-container__current-weather-body_summary">
      <div className="dk-weather-main-container__current-weather-body_summary__weather-img dk-weather-main-container__current-weather-body_summary__element">
        Картинка погоды
      </div>
      <div className="dk-weather-main-container__current-weather-body_summary__temperature dk-weather-main-container__current-weather-body_summary__element">
        Температура
      </div>
      <div className="dk-weather-main-container__current-weather-body_summary__date dk-weather-main-container__current-weather-body_summary__element">
        Текущая дата
      </div>
    </div>
  );
}

export default CurrentWeatherSummary;
