import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
const Title = (props) => {
  return <Text style={styles.title} {...props}></Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Title;
