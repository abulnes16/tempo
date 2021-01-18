/* Axios module 
  Configures the axios library with the base API URL.
*/

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export default instance;
