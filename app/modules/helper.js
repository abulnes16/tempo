import React from "react";
import { Icon } from "react-native-elements";
import moment from "moment";
import colors from "../constants/colors";

import {
  CLOUDS,
  SUN,
  RAIN,
  THUNDERSTORM,
  SNOW,
  DRIZZLE,
} from "../constants/weatherTypes";

function convertTemperature(temperature) {
  return Math.floor(temperature - 273.15);
}

function getDayOfTheWeek(date) {
  const day = moment.unix(date).format("dddd");
  return day;
}

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
