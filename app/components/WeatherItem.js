import React from "react";
import { Icon } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { convertTemperature } from "../modules/helper";

const WeatherItem = ({ weather }) => {
  return (
    <View style={styles.card}>
      <View style={styles.weatherInfo}>
        <Icon name="wb-sunny" size={70} color={colors.secondary} />
        <Text style={styles.weatherTemperature}>
          {convertTemperature(weather.main.temp)} °C
        </Text>
        <View>
          <Text style={styles.weatherLocation}>
            {weather.name} {weather.sys.country}
          </Text>
        </View>
      </View>
      <View style={styles.weatherData}>
        <View style={styles.dataContainer}>
          <Icon name="droplet" type="feather" color={colors.blue} />
          <Text style={styles.text}>Humidity {weather.main.humidity}%</Text>
        </View>
        <View style={styles.dataContainer}>
          <Icon name="air" type="entypo" color={colors.primary} />
          <Text style={styles.text}>Wind {weather.wind.speed} m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 20,
    elevation: 3,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  weatherInfo: {
    alignItems: "center",
  },
  weatherTemperature: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 8,
  },

  weatherLocation: {
    fontSize: 18,
    fontWeight: "200",
  },
  weatherData: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    marginLeft: 5,
    fontSize: 12,
  },
});

export default WeatherItem;
