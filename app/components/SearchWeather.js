import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SearchWeather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
    backgroundColor: "white",
    marginRight: 25,
    paddingVertical: 7,
    paddingHorizontal: 20,
    elevation: 2,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  btn: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "#22C1C3",
    borderRadius: 20,
  },

  text: {
    color: "white",
  },
});

export default SearchWeather;
