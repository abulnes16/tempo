import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "./Title";
import WeatherItem from "./WeatherItem";

import globalStyles from "../styles/globalStyles";

const Weather = ({ weather }) => {
  return (
    <View style={globalStyles.container}>
      <Title>Tiempo actual</Title>
      <View style={styles.weatherContainer}>
        <WeatherItem weather={weather} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    alignItems: "center",
  },
});

export default Weather;
