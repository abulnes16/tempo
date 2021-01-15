import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "./Title";
import WeatherItem from "./WeatherItem";

const Weather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title>Tiempo actual</Title>
      </View>
      <View style={styles.weatherContainer}>
        <WeatherItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    /* backgroundColor: 'blue', */
  },
  titleContainer: {
    alignItems: "flex-start",
    marginBottom: 10,
  },

  weatherContainer: {
    alignItems: "center",
  },
});

export default Weather;
