/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, TouchableOpacity, StyleSheet, Text } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Authorization extends Component {
  render() {
    return (
      <Container style={styles.background}>
        <Header />
        <Content>
          <Form style={styles.input}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  SignButton: {
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#1E90FF"
  },
  background: {
    backgroundColor: "#FFF5EE"
  },
  input: {
    fontSize: 18,
    backgroundColor: "#FFFFFF"
  },
  Text: {
    fontSize: 18
  }
});

/*
export class ButtonSign extends Component {
  render() {
    return (
      <View style={styles.background}>
        <TouchableOpacity style={styles.SignButton}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

*/
