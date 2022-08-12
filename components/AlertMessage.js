import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AlertMessage = (props) => {
  const { isSuccess, content, onHandleCloseAlertBox } = props;

  return (
    <View style={[styles.centerView, styles.container]}>
      <View style={{ position: "relative" }}>
        {/* closed button */}
        <TouchableOpacity
          onPress={onHandleCloseAlertBox}
          style={styles.closedBtn}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        {/* content alert box */}
        <View style={[styles.modalView, styles.centerView]}>
          <View
            style={[
              isSuccess
                ? { backgroundColor: "#26b887" }
                : { backgroundColor: "#f00" },
              styles.alertBtn,
            ]}
          >
            {isSuccess ? (
              <AntDesign name="check" size={35} color="#fff" />
            ) : (
              <AntDesign name="close" size={35} color="#FFF" />
            )}
          </View>

          <Text style={styles.headingText}>
            {isSuccess ? "Success!" : "Error!"}
          </Text>

          <Text style={styles.content}>{content}</Text>

          <TouchableOpacity
            activeOpacity={0.2}
            style={[
              isSuccess ? { borderColor: "#26b887" } : { borderColor: "#f00" },
              styles.button,
            ]}
            onPress={onHandleCloseAlertBox}
          >
            <Text
              style={[
                isSuccess ? { color: "#26b887" } : { color: "#f00" },
                styles.buttonText,
              ]}
            >
              {isSuccess ? "Continue" : "Try again"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlertMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    shadowOpacity: 0.2,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    width: "70%",
    height: "50%",
    padding: 30,
    maxHeight: 250,
    maxWidth: 260,
  },
  closedBtn: {
    textAlign: "right",
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    // right: 10,
  },
  alertBtn: {
    textAlign: "center",
    width: 50,
    height: 50,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    marginTop: 10,
    color: "#747474",
    fontWeight: "700",
    fontSize: 20,
  },
  content: {
    marginTop: 10,
    color: "#838383",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
