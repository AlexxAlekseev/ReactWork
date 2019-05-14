/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Button extends Component {
  onPressButton() {
    Alert.alert("Аня самая лучшая в мире!");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPressButton}>
          <Text>Нажми сюда</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5EE"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 10
  }
});
