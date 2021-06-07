import './WeatherForecast.css';
function WeatherForecast() {
  return (
    <div className="dk-weather-main-container__forecast-container">
      <div className="dk-weather-main-container__forecast-container__day">
        <p>{new Date().toLocaleDateString()}</p>
        <img src="https://img.icons8.com/plasticine/2x/sun.png"></img>
        <p>
          30<sup>&deg;</sup>
        </p>
      </div>
      <div className="dk-weather-main-container__forecast-container__day"></div>
      <div className="dk-weather-main-container__forecast-container__day"></div>
      <div className="dk-weather-main-container__forecast-container__day"></div>
      <div className="dk-weather-main-container__forecast-container__day"></div>
      <div className="dk-weather-main-container__forecast-container__day"></div>
      <div className="dk-weather-main-container__forecast-container__day"></div>
    </div>
  );
}

export default WeatherForecast;
