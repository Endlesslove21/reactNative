import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from "./components/HeaderIcon";
import FormLogin from "./components/FormLogin";
import FooterLogin from "./components/FooterLogin";
import AlertMessage from "./components/AlertMessage";

const App = () => {
  //add custom fonts using hook
  const [loaded] = useFonts({
    Helvetica: require("./assets/fonts/helvetica/helvetica-light-587ebe5a59211.ttf"),
    OpenSans: require("./assets/fonts/openSans/OpenSans-BoldItalic.ttf"),
    Inspiration: require("./assets/fonts/inspiration/Inspiration-Regular.ttf"),
  });

  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [isAlertSuccess, setIsAlertSuccess] = useState(null);
  const [alertContent, setAlertContent] = useState("");

  const handleInput = (emailInput, password) => {
    if (!emailInput && !password) {
      setIsDisplayModal(true);
      setAlertContent("Please enter your email and password to login !");
    } else if (emailInput && !password) {
      setIsDisplayModal(true);
      setAlertContent("You must type your password to continue!");
    } else if (!emailInput && password) {
      setIsDisplayModal(true);
      setAlertContent("You must type your email to continue!");
    } else {
      setIsDisplayModal(true);
      setIsAlertSuccess(true);
      setAlertContent("Your email and password are valid. Tap continue !");
    }
  };
  const handleCloseAlertBox = () => {
    setIsDisplayModal(false);
    setIsAlertSuccess(false);
    setAlertContent("");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headingText}>Wellcome!</Text>
        <HeaderIcon />
        <FormLogin onInputHandler={handleInput} />
        <FooterLogin />
        <Modal
          transparent={false}
          animationType="slide"
          visible={isDisplayModal}
        >
          <AlertMessage
            onHandleCloseAlertBox={handleCloseAlertBox}
            isSuccess={isAlertSuccess}
            content={alertContent}
          />
        </Modal>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: "#fbfbfb",
  },
  content: {},
  headingText: {
    marginTop: 130,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Inspiration",
    color: "#6c62eb",
    fontWeight: "900",
    letterSpacing: 1,
  },
});
