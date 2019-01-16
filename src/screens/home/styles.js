import styled from "styled-components/native"
import { Animated, FlatList } from "react-native"

const UnstyledAnimatedFlatList = Animated.createAnimatedComponent(FlatList)
import UnstyledDecksList from "./components/DecksList"

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
`

export const Header = styled(Animated.View)`
  position: absolute;
  background-color: #4257b2;
  z-index: -1;
  height: 200;
  left: 0;
  right: 0;
  justify-content: center;
`

export const WelcomeTitle = styled.Text`
  font-size: 36px;
  text-align: center;
  color: white;
`

export const WelcomeDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  text-align: center;
  color: white;
`

export const DecksList = styled(UnstyledDecksList)``

export const AnimatedFlatList = styled(UnstyledAnimatedFlatList)``

export const FixedStatusBar = styled.View`
  position: absolute;
  height: 200;
  left: 0;
  right: 0;
  background-color: #4257b2;
  z-index: 2;
  height: ${props => props.height};
`
