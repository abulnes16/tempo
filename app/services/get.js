import axios from "../modules/axios";
import config from "../config";

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
    console.log(error);
    return error.message;
  }
}

export { getData };
