import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./app/components/Logo";
import SearchWeather from "./app/components/SearchWeather";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <SearchWeather />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
