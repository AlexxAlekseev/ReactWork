import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default class Text extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> У тебя получилось! </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "fff5ee"
  },
  text: {
    flex: 1,
    alignItems: "center"
  }
});
