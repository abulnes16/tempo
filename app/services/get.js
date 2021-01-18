/* GET Service module 
  Manage the GET request to the API
*/

import axios from "../modules/axios";
import config from "../config";

/**
 * Function that make a GET request to the API
 * @param {string} resource Resource to be consulted
 * @param {string} query Query to filter data
 * @returns Data from the API
 */
async function getData(resource, query) {
  try {
    const response = await axios.get(
      `${resource}?${query}&appid=${config.apiKey}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response);
    }
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

export { getData };
