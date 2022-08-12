import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const FormLogin = (props) => {
  const { onInputHandler } = props;
  const [isDisplay, setIsDisplay] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmailText = (enterEmailInput) => {
    setEmailInput(enterEmailInput);
  };

  const handlePasswordInput = (enterPassword) => {
    setPassword(enterPassword);
  };

  const handlePressLogin = () => {
    onInputHandler(emailInput, password);
  };
  const handleShowPassword = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionView}>
        <Text style={styles.text}>Email</Text>
        <View style={styles.textInput}>
          <TextInput
            color="#bbb"
            placeholder="Email"
            placeholderTextColor="#ccc"
            onChangeText={handleChangeEmailText}
            style={{ width: "100%" }}
          />
        </View>
      </View>

      <View style={[styles.sectionView, { marginTop: 40 }]}>
        <Text style={styles.text}>Password</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            color="#bbb"
            secureTextEntry={isDisplay}
            onChangeText={handlePasswordInput}
            style={{ width: "80%" }}
          />
          <Pressable onPress={handleShowPassword}>
            {isDisplay ? (
              <Feather name="eye" size={15} color="#aaa" />
            ) : (
              <Entypo name="eye-with-line" size={15} color="#aaa" />
            )}
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable onPress={handlePressLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        <Pressable style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    fontFamily: "Inspiration",
  },
  sectionView: {
    marginTop: 20,
  },
  text: {
    color: "#6c62eb",
    fontWeight: "600",
    fontSize: 16,
  },
  textInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#4267B2",
  },
  buttonView: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  borderForButton: {},
  loginButton: {
    paddingHorizontal: 80,
    paddingVertical: 10,
    backgroundColor: "#6c62eb",
    borderRadius: 50,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  signUpButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#6c62eb",
    borderRadius: 50,
  },
  signUpButtonText: {
    color: "#6c62eb",
    fontWeight: "600",
  },
});
