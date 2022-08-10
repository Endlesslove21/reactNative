import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const HeaderIcon = () => {
  return (
    <View style={styles.socialIconView}>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.4 : 1,
          },
          styles.socialIcon,
          { marginRight: 50 },
        ]}
      >
        <FontAwesome name="google" size={15} color="#eb4034" />
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.4 : 1,
          },
          styles.socialIcon,
        ]}
      >
        <FontAwesome name="facebook" size={15} color="#4267B2" />
      </Pressable>
    </View>
  );
};

export default HeaderIcon;

const styles = StyleSheet.create({
  socialIconView: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  socialIcon: {
    borderWidth: 2,
    borderColor: "#e6e6e8",
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderRadius: 30,
  },
});
