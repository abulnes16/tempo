import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/img/tempo-logo-bg.png")}
      />
      <Text style={styles.title}>Tempo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 120,
  },
  title: {
    fontSize: 38,
    color: colors.secondary,
  },
});

export default Logo;
