import axios from 'axios';
// import { OPEN_WEATHER_MAP_API_KEY } from '../../credentials.js';

// const API_KEY = OPEN_WEATHER_MAP_API_KEY;
// const API_KEY = 'aaa952ab4e0bd6419bfb788ad14db257';
// const API_KEY = OPEN_WEATHER_MAP_API_KEY;
const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // console.log(process.env.GOOGLEMAP_API_KEY);
  const url = `${ROOT_URL}&q=${city},us`;
  // console.log(url);
  const request = axios.get(url);
  // console.log('Request:', request);
  // redux promise see action and looks at payload
  // if payload is promise, stops actions and dispatches
  // action when promise resolves and dispatches payload
  // redux-promise imported in src/index.js and applied
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
// export function fetchWeather = (city) => async (dispatch) => {
//   const url = `${ROOT_URL}&q=${city},us`;
//   console.log(url);
//   const request = await axios.get(url);
//   // console.log('Request:', request);
//   // redux promise see action and looks at payload
//   // if payload is promise, stops actions and dispatches
//   // action when promise resolves and dispatches payload
//   // redux-promise imported in src/index.js and applied
// dispatch({
//   type: FETCH_WEATHER,
//   payload: request
// });
//   // return {
//   //   type: FETCH_WEATHER,
//   //   payload: request
//   // };
// }
