/* Search Weather Component 
  Manage the city filter of the app. 
  props: 
    - getWeather: Function that elevates the city name to the App Component
*/

import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../constants/colors";

import { Icon } from "react-native-elements";

const SearchWeather = ({ getWeather }) => {
  const [cityName, setCityName] = useState("");

  const searchCity = () => {
    getWeather(cityName);
    setCityName("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" color={colors.primary} />
        <TextInput
          value={cityName}
          onChangeText={(text) => setCityName(text)}
          placeholder="City name"
        />
      </View>
      <TouchableOpacity onPress={searchCity} style={styles.btn}>
        <Text style={styles.text}>Search</Text>
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
