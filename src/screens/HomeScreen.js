import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import SignButton from "../components/Buttons/SignButton";
import { Navigation } from "react-native-navigation";

goToScreen = screenName => {
  Navigation.push(this.props.componentId, {
    component: {
      name: screenName
    }
  });
};

export default class Button extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.button}>
          <SignButton onPress={() => this.goToScreen("MainScreen")} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "fff5ee"
  },
  button: {
    padding: 10,
    flex: 0.2,
    color: "black",
    backgroundColor: "24cfca",
    alignItems: "center",
    borderRadius: 10
  }
});
