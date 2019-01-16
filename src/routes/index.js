import React from "react"
import { View, Text } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from "../screens/home"
import DeckDetailScreen from "../screens/deckDetail"

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

const MainAppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    DeckDetail: {
      screen: DeckDetailScreen
    }
  },
  {
    defaultNavigationOptions
  }
)

export default createAppContainer(MainAppNavigator)
