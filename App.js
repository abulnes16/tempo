import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Logo from "./app/components/Logo";
import SearchWeather from "./app/components/SearchWeather";
import Weather from "./app/components/Weather";
import Forecast from "./app/components/Forecast";
import { getData } from "./app/services/get";
import Loader from "./app/components/Loader";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWeather = async (cityName) => {
    if (cityName === "") {
      Alert.alert(
        "Missing city name",
        "You need to input a city name for searching it"
      );
      return;
    }

    setLoading(true);
    const query = `q=${cityName || "tegucigalpa"}`;
    try {
      const weather = await getData("weather", query);
      const { lon, lat } = weather.coord;
      const queryForecast = `lat=${lat}&lon=${lon}&exclude=hourly,minutely`;
      const forecast = await getData("onecall", queryForecast);
      setCurrentWeather(weather);
      setForecast(forecast);
      setLoading(false);
    } catch (error) {
      Alert.alert("Loading error", "We couldn't retrieve the current weather");
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <SearchWeather getWeather={getWeather} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Weather weather={currentWeather} />
          <Forecast forecast={forecast} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
