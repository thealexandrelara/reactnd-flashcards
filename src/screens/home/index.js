import React from "react"
import { StatusBar, Animated } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"

import {
  Container,
  Header,
  WelcomeTitle,
  WelcomeDescription,
  DecksList,
  AnimatedFlatList,
  FixedStatusBar
} from "./styles"

export default class Home extends React.Component {
  state = {
    animatedValue: new Animated.Value(0)
  }
  static navigationOptions = { header: null }

  navigateToDeckDetail = id => {
    const { navigation } = this.props

    navigation.navigate("DeckDetail")
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
      </Container>
    )
  }
}
