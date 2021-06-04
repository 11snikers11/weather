import './Header.css';
import geoImg from './placeholder.svg';
function Header() {
  return (
    <div className="dk-weather-main-container__header">
      <select>
        <option>Москва</option>
        <option>Сочи</option>
      </select>
      <button>
        <img src={geoImg} />
      </button>
    </div>
  );
}

export default Header;
