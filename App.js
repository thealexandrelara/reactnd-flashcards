import React from "react"
import { StyleSheet, Text, View } from "react-native"

import AppContainer from "./src/routes"

import Home from "./src/screens/home"
import DeckDetail from "./src/screens/deckDetail"

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
