import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Title from "./Title";
import globalStyles from "../styles/globalStyles";
import ForcastItem from "./ForcastItem";
const Forecast = () => {
  return (
    <View style={globalStyles.container}>
      <Title>Pronostico semanal</Title>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.innerContainer}
        horizontal
      >
        <ForcastItem />
        <ForcastItem />
        <ForcastItem />
        <ForcastItem />
        <ForcastItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  scroll: {
    height: 120,
  },

  innerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "space-evenly",
  },
});

export default Forecast;
