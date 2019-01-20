import styled from "styled-components/native"
import { FlatList, Animated, Dimensions } from "react-native"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

const screenHeight = Dimensions.get("window").height
const UnstyledAnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export const Container = styled.View`
  flex: 1;
`

export const AnimatedFlatList = styled(UnstyledAnimatedFlatList)``

export const EmptyListContainer = styled.View`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
`

export const EmptyListText = styled.Text`
  font-size: 16px;
  color: #9e9e9e;
`

export const EmptyIcon = styled(MaterialCommunityIcons)`
  color: #9e9e9e;
`

export const HeaderContainer = styled.View``

export const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #9e9e9e;
  margin-bottom: 16px;
`
