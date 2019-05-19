import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default class Button extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Text> Sign in</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
