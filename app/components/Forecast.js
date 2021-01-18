/* Forecast Component 
   Renders the Forecast section of the app
   props: 
    - forecast: An array of daily forecast of the current city
*/

import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

// Components
import Title from "./Title";
import ForcastItem from "./ForcastItem";

// Styles
import globalStyles from "../styles/globalStyles";

const Forecast = ({ forecast }) => {
  return (
    <View style={globalStyles.container}>
      <Title>Weekly Forecast</Title>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.innerContainer}
        horizontal
      >
        {forecast.daily.map((daily) => (
          <ForcastItem key={daily.dt} data={daily} />
        ))}
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
