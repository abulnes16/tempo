import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../constants/colors";

import { Icon } from "react-native-elements";

const SearchWeather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" color={colors.primary} />
        <TextInput placeholder="Nombre de ciudad" />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginRight: 25,
    paddingVertical: 7,
    paddingHorizontal: 20,
    elevation: 3,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  btn: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },

  text: {
    color: "white",
  },
});

export default SearchWeather;
