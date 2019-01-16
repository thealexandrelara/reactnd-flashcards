import React from "react"
import { StatusBar, Animated, Text } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"

import {
  Container,
  HeaderContainer,
  HeaderTitle,
  HeaderCardsCount,
  ButtonsWrapper,
  ButtonsContainer
} from "./styles"
import Button from "./components/Button"

export default class DeckDetail extends React.Component {
  static navigationOptions = {
    title: "Deck"
  }

  render() {
    const { style } = this.props

    return (
      <Container style={style}>
        <StatusBar barStyle="light-content" hidden={false} />
        <HeaderContainer>
          <HeaderCardsCount>1 card</HeaderCardsCount>
          <HeaderTitle>Redux</HeaderTitle>
        </HeaderContainer>
        <ButtonsWrapper>
          <ButtonsContainer>
            <Button
              name="Flashcards"
              iconName="cards"
              iconLibrary="MaterialCommunityIcons"
            />
          </ButtonsContainer>
          <ButtonsContainer>
            <Button
              name="Add card"
              iconName="library-add"
              iconLibrary="MaterialIcons"
              style={{ marginRight: 4 }}
            />
            <Button
              name="Edit cards"
              iconName="circle-edit-outline"
              iconLibrary="MaterialCommunityIcons"
              style={{ marginLeft: 4 }}
            />
          </ButtonsContainer>
        </ButtonsWrapper>
      </Container>
    )
  }
}
