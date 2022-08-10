import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from "./components/HeaderIcon";
import FormLogin from "./components/FormLogin";
import FooterLogin from "./components/FooterLogin";
const App = () => {
  //add custom fonts using hook
  const [loaded] = useFonts({
    Helvetica: require("./assets/fonts/helvetica/helvetica-light-587ebe5a59211.ttf"),
    OpenSans: require("./assets/fonts/openSans/OpenSans-BoldItalic.ttf"),
    Inspiration: require("./assets/fonts/inspiration/Inspiration-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Wellcome!</Text>
      <HeaderIcon />
      <FormLogin />
      <FooterLogin />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: "#fbfbfb",
  },

  headingText: {
    marginTop: 130,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Helvetica",
    color: "#6c62eb",
    fontWeight: "900",
    letterSpacing: 1,
  },
});
