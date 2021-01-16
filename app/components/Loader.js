/* Loader component
  Renders a loading spinner in the center of the app
*/

import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../constants/colors";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
