import React from "react"
import { StatusBar, Animated } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"
import { FloatingAction } from "react-native-floating-action"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as DecksActions } from "../../store/ducks/decks"

import { SCREEN_ROUTES_NAME } from "../../routes/constants"

import {
  Container,
  Header,
  WelcomeTitle,
  WelcomeDescription,
  DecksList,
  FixedStatusBar
} from "./styles"

const actions = [
  {
    text: "Add deck",
    name: SCREEN_ROUTES_NAME.ADD_DECK_MODAL,
    icon: <MaterialIcons name="library-add" size={24} color="#fff" />,
    position: 1
  }
]

class Home extends React.Component {
  state = {
    animatedValue: new Animated.Value(0)
  }

  componentDidMount() {
    const { addInitialDataRequest: addInitialDataAndRetrieveDecks } = this.props

    addInitialDataAndRetrieveDecks()
    // retrieveDecksRequest()
  }

  navigateToDeckDetail = deckId => {
    const { navigation } = this.props

    navigation.navigate(SCREEN_ROUTES_NAME.DECK_DETAIL, { deckId })
  }

  openAddDeckPopup = name => {
    const { navigation } = this.props

    navigation.navigate(name, { onAddDeck: this.navigateToDeckDetail })
  }

  render() {
    const { animatedValue } = this.state
    const { decks } = this.props

    let translateY = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: [0, -180],
      extrapolate: "clamp"
    })

    return (
      <Container>
        <FixedStatusBar height={getStatusBarHeight()} />
        <StatusBar
          barStyle="light-content"
          hidden={false}
          style={{ zIndex: 2, height: 20 }}
        />
        <Header style={{ transform: [{ translateY }] }}>
          <WelcomeTitle>Hello,</WelcomeTitle>
          <WelcomeDescription>Choose or create a new deck</WelcomeDescription>
        </Header>
        <DecksList
          animatedValue={animatedValue}
          onListItemPressed={this.navigateToDeckDetail}
          decks={decks}
        />
        <FloatingAction
          actions={actions}
          onPressItem={this.openAddDeckPopup}
          color="#4257b2"
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({ decks: Object.values(state.decks) })

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
