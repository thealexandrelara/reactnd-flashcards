import React from "react";
import { StatusBar } from "react-native";

import { Container, Header, WelcomeTitle, WelcomeDescription } from "./styles";
import DecksList from "./components/DecksList";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="red"
        />
        <Header>
          <WelcomeTitle>Hello,</WelcomeTitle>
          <WelcomeDescription>
            Choose a deck or create a new one
          </WelcomeDescription>
        </Header>
        <DecksList />
      </Container>
    );
  }
}
