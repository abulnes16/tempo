import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
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

  useEffect(() => {
    const getWeather = async () => {
      const query = "q=tegucigalpa";
      const weather = await getData("weather", query);
      const { lon, lat } = weather.coord;
      const queryForecast = `lat=${lat}&lon=${lon}&exclude=hourly,minutely`;
      const forecast = await getData("onecall", queryForecast);
      console.log(forecast);
      setCurrentWeather(weather);
      setForecast(forecast);
      setLoading(false);
    };

    getWeather();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Logo />
      <SearchWeather />
      <Weather weather={currentWeather} />
      <Forecast forecast={forecast} />
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
