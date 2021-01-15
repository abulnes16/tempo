import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./app/components/Logo";
import SearchWeather from "./app/components/SearchWeather";
import Weather from "./app/components/Weather";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <SearchWeather />
      <Weather />
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
