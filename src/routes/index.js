import React from "react"
import { View, Text } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from "../screens/home"
import DeckDetailScreen from "../screens/deckDetail"
import AddDeckScreen from "../screens/addDeck"
import AddCardScreen from "../screens/addCard"

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
      screen: MainNavigator
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
    }
  },
  {
    defaultNavigationOptions,
    mode: "modal",
    headerMode: "none"
  }
)

export default createAppContainer(RootNavigator)
