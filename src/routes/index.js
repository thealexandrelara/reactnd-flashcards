import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Ionicons from "@expo/vector-icons/Ionicons"

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
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null
      }
    },
    DeckDetail: {
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
    Home: {
      screen: MainNavigator,
      navigationOptions: {
        header: () => null
      }
    },
    AddDeckModal: {
      screen: AddDeckScreen,
      navigationOptions: {
        title: "Add Deck"
      }
    },
    AddCardModal: {
      screen: AddCardScreen,
      navigationOptions: {
        title: "Add Card"
      }
    },
    QuizModal: {
      screen: QuizScreen,
      navigationOptions: {
        title: "Quiz"
      }
    }
  },
  {
    defaultNavigationOptions,
    mode: "modal"
    // headerMode: "none"
  }
)

export default createAppContainer(RootNavigator)
