import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const FooterLogin = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.loginInstantBtnText}>Want to login instantly?</Text>
      </Pressable>
      <View>
        <Text style={styles.text}>Use your finger!</Text>
      </View>
      <View style={styles.image}>
        <Image source={require("../assets/imgs/finger_print.png")} />
      </View>
    </View>
  );
};

export default FooterLogin;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  loginInstantBtnText: {
    color: "#46484c",
    fontSize: 13,
    fontWeight: "800",
  },
  text: {
    marginTop: 25,
    marginBottom: 40,
    fontWeight: "800",
    color: "#6c62eb",
  },
  image: {
    paddingBottom: 30,
  },
});
