import moment from "moment";

function convertTemperature(temperature) {
  return Math.floor(temperature - 273.15);
}

function getDayOfTheWeek(date) {
  const day = moment.unix(date).format("dddd");
  return day;
}

export { convertTemperature, getDayOfTheWeek };
