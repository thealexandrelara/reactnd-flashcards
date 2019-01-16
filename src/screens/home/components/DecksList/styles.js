import styled from "styled-components/native";
import {
  StatusBar,
  View,
  Text,
  FlatList,
  Animated,
  StyleSheet
} from "react-native";

const UnstyledAnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const Container = styled.View`
  flex: 1;
`;

export const AnimatedFlatList = styled(UnstyledAnimatedFlatList)``;
