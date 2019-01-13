import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Container, Header, WelcomeTitle, WelcomeDescription } from "./styles";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <WelcomeTitle>Hello,</WelcomeTitle>
          <WelcomeDescription>
            Choose a deck or create a new one
          </WelcomeDescription>
        </Header>
      </Container>
    );
  }
}
