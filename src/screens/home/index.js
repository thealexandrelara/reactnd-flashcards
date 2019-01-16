import React from "react"
import { StatusBar, Animated } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"
import { FloatingAction } from "react-native-floating-action"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

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
    name: "AddDeckModal",
    icon: <MaterialIcons name="library-add" size={24} color="#fff" />,
    position: 1
  }
]

export default class Home extends React.Component {
  state = {
    animatedValue: new Animated.Value(0)
  }

  navigateToDeckDetail = id => {
    const { navigation } = this.props

    navigation.navigate("DeckDetail")
  }

  openAddDeckPopup = name => {
    const { navigation } = this.props

    console.log(name)

    navigation.navigate(name)
  }

  render() {
    const { animatedValue } = this.state
    let translateY = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: [0, -180],
      extrapolate: "clamp"
    })

    console.log(getStatusBarHeight())

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
