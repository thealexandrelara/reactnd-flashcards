import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Ionicons from "@expo/vector-icons/Ionicons"

import { SCREEN_ROUTES_NAME } from "./constants"

import HomeScreen from "../screens/home"
import DeckDetailScreen from "../screens/deckDetail"
import AddDeckScreen from "../screens/addDeck"
import AddCardScreen from "../screens/addCard"
import QuizScreen from "../screens/quiz"

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#4257b2"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  },
  headerBackTitle: null
}

const MainNavigator = createStackNavigator(
  {
    [SCREEN_ROUTES_NAME.HOME]: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null
      }
    },
    [SCREEN_ROUTES_NAME.DECK_DETAIL]: {
      screen: DeckDetailScreen,
      navigationOptions: {
        headerTitle: "Deck"
      }
    }
  },
  {
    defaultNavigationOptions
  }
)

const RootNavigator = createStackNavigator(
  {
    [SCREEN_ROUTES_NAME.HOME]: {
      screen: MainNavigator,
      navigationOptions: {
        header: () => null
      }
    },
    [SCREEN_ROUTES_NAME.ADD_DECK_MODAL]: {
      screen: AddDeckScreen,
      navigationOptions: {
        title: "Add Deck"
      }
    },
    [SCREEN_ROUTES_NAME.ADD_CARD_MODAL]: {
      screen: AddCardScreen,
      navigationOptions: {
        title: "Add Card"
      }
    },
    [SCREEN_ROUTES_NAME.QUIZ_MODAL]: {
      screen: QuizScreen
    }
  },
  {
    defaultNavigationOptions,
    mode: "modal"
    // headerMode: "none"
  }
)

export default createAppContainer(RootNavigator)
