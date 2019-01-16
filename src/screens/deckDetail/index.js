import React from "react"
import { StatusBar } from "react-native"

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
  static navigationOptions = ({ navigation }) => {
    // console.log(navigation)

    return {
      headerTitle: ""
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
  }

  navigateTo = name => {
    console.log(name)
    const { navigation } = this.props

    navigation.navigate(name)
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
              name="Start a Quiz"
              iconName="cards"
              iconLibrary="MaterialCommunityIcons"
            />
          </ButtonsContainer>
          <ButtonsContainer>
            <Button
              name="Create New Question"
              iconName="library-add"
              iconLibrary="MaterialIcons"
              style={{ marginRight: 4 }}
              onPress={() => this.navigateTo("AddCardModal")}
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
