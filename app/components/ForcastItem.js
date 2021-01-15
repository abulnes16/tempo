import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../constants/colors";

const ForcastItem = () => {
  return (
    <View style={styles.card}>
      <Icon name="air" type="entypo" color={colors.primary} />
      <Text style={styles.day}>Lu</Text>
      <Text style={styles.temperature}>25°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
  },
  day: {
    fontSize: 12,
    fontWeight: "100",
    marginTop: 5,
  },
  temperature: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
});

export default ForcastItem;
