import React from "react"
import { StatusBar } from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as DecksActions } from "../../store/ducks/decks"
import { Selectors } from "../../store/ducks"

import { SCREEN_ROUTES_NAME } from "../../routes/constants"

import {
  Container,
  HeaderContainer,
  HeaderTitle,
  HeaderCardsCount,
  ButtonsWrapper,
  ButtonsContainer
} from "./styles"
import Button from "./components/Button"
import CardsList from "./components/CardsList"

class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: ""
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.deck && prevProps.deck) {
      const { navigation } = this.props
      navigation.goBack()
    }
  }

  navigateTo = name => {
    const { navigation, deck } = this.props
    const deckId = navigation.getParam("deckId", "")

    if (!!deckId) {
      navigation.navigate(name, { deckId, deck })
    }
  }

  render() {
    const { style, deck, deleteDeckRequest } = this.props

    if (!deck) {
      return (
        <Container>
          <HeaderTitle>No deck</HeaderTitle>
        </Container>
      )
    }

    return (
      <Container style={style}>
        <StatusBar barStyle="light-content" hidden={false} />
        <HeaderContainer>
          <HeaderCardsCount>
            {deck.cards.length} {deck.cards.length < 2 ? "card" : "cards"}
          </HeaderCardsCount>
          <HeaderTitle>{deck.title}</HeaderTitle>
        </HeaderContainer>
        <ButtonsWrapper>
          <ButtonsContainer>
            <Button
              name="Start a Quiz"
              iconName="cards"
              iconLibrary="MaterialCommunityIcons"
              onPress={() => this.navigateTo(SCREEN_ROUTES_NAME.QUIZ_MODAL)}
              type={!deck.cards.length ? "disabled" : undefined}
            />
          </ButtonsContainer>
          <ButtonsContainer>
            <Button
              name="Create New Question"
              iconName="library-add"
              iconLibrary="MaterialIcons"
              style={{ marginRight: 4 }}
              onPress={() => this.navigateTo(SCREEN_ROUTES_NAME.ADD_CARD_MODAL)}
            />
            <Button
              name="Delete deck"
              iconName="delete"
              iconLibrary="MaterialIcons"
              style={{ marginLeft: 4 }}
              type="danger"
              onPress={() => deleteDeckRequest(deck.id)}
            />
          </ButtonsContainer>
        </ButtonsWrapper>
        <CardsList cards={deck.cards} deckId={deck.id} />
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    deck: Selectors.decks.getSingleDeck(
      state,
      ownProps.navigation.getParam("deckId", "")
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetail)
