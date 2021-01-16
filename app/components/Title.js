/* Title component 
   Renders a title with default styles
*/
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../constants/colors";
const Title = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title} {...props}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "flex-start",
    marginBottom: 10,
  },
});

export default Title;
