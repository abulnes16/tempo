import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./app/components/Logo";
import SearchWeather from "./app/components/SearchWeather";
import Weather from "./app/components/Weather";
import Forecast from "./app/components/Forecast";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <SearchWeather />
      <Weather />
      <Forecast />
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
