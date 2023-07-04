import PropTypes from 'prop-types';

const WeatherCard = ({ img, temp, city , dt_txt , weather , clouds , temp_max , temp_min , feels_like}) => {
  return <article className="card">
    <img src={img}/>
    <p>fecha y hora: {dt_txt}</p>
      <h2>{temp} Cº</h2>
    <section className="flexCol">
      <p>Localidad: {city}</p>
      <p>Sensación térmica:{feels_like} Cº</p>
      <p>Temp.Max: {temp_max} Cº</p> 
      <p>Temp.Mim: {temp_min} Cº</p> 
    </section>  
    <section className="flexCol">
      <h3>Estado del tiempo:</h3>
      <p>Clima: {weather}</p>
      <p>Nubes: {clouds}</p>
    </section>  
  </article>;
};

WeatherCard.propTypes = {
  img: PropTypes.string,
  temp: PropTypes.number,
  day: PropTypes.number,
  city: PropTypes.string,
  dt_txt: PropTypes.string,
  weather: PropTypes.string,
  clouds: PropTypes.number,
  temp_max: PropTypes.number,
  temp_min: PropTypes.number,
  feels_like: PropTypes.number,
}


export default WeatherCard;