import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

export default class SignButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
    );
  }
}
