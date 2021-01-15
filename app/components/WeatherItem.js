import React from "react";
import { Icon } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const WeatherItem = () => {
  return (
    <View style={styles.card}>
      <View style={styles.weatherInfo}>
        <Icon name="wb-sunny" size={70} color={colors.secondary} />
        <Text style={styles.weatherTemperature}>20 °C</Text>
        <View>
          <Text style={styles.weatherLocation}>Tegucigalpa, HN</Text>
        </View>
      </View>
      <View style={styles.weatherData}>
        <View>
          <Icon name="droplet" type="feather" color={colors.blue} />
          <Text style={styles.text}>Humedad 30%</Text>
        </View>
        <View>
          <Icon name="air" type="entypo" color={colors.primary} />
          <Text style={styles.text}>Viento 3.6 m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 20,
    elevation: 2,
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

  text: {
    marginTop: 8,
  },
});

export default WeatherItem;
