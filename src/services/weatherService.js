import http from './httpService'
import config from '../config'

const apiKey = config.apiKey


const getCurrentWeather = async (city) => {
  return http.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
};

export default { getCurrentWeather };
