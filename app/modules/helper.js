/* Helper module */

// Modules
import React from "react";
import { Icon } from "react-native-elements";
import moment from "moment";

//Constants
import colors from "../constants/colors";
import {
  CLOUDS,
  SUN,
  RAIN,
  THUNDERSTORM,
  SNOW,
  DRIZZLE,
} from "../constants/weatherTypes";

/**
 * Convert the temperature from Kelvin to Celsius degrees
 * @param {number} temperature Kelvin temperature
 * @returns Temperature in Celsius
 */
function convertTemperature(temperature) {
  return Math.floor(temperature - 273.15);
}

/**
 * Transform an unix date to the week of the day.
 * @param {number} date Unix date
 * @returns Week of the day
 */
function getDayOfTheWeek(date) {
  return moment.unix(date).format("dddd");
}

/**
 * Get the icon based on the weather type of the API
 * @param {string} weather Weather type
 * @param {number} size Icon size
 * @returns Icon with the respective weather type
 */
function getIcon(weather, size = 40) {
  switch (weather) {
    case SUN:
      return <Icon name="wb-sunny" size={size} color={colors.secondary} />;
    case CLOUDS:
      return <Icon name="cloud" size={size} color={colors.gray} />;
    case SNOW:
      return (
        <Icon name="snow" size={size} type="ionicon" color={colors.blue} />
      );
    case RAIN:
      return (
        <Icon name="rainy" size={size} type="ionicon" color={colors.gray} />
      );
    case THUNDERSTORM:
      return (
        <Icon
          name="thunderstorm"
          size={size}
          type="ionicon"
          color={colors.gray}
        />
      );
    case DRIZZLE:
      return (
        <Icon name="air" type="entypo" size={size} color={colors.primary} />
      );
  }
}

export { convertTemperature, getDayOfTheWeek, getIcon };
