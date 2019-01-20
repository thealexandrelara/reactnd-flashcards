import React from "react"
import { Animated, TouchableOpacity, Text } from "react-native"

import {
  AnimatedFlatList,
  EmptyListContainer,
  EmptyListText,
  EmptyIcon,
  HeaderContainer,
  HeaderText
} from "./styles"
import Item from "./Item"

export default class CardsList extends React.Component {
  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => {
    console.log("ITEM", item)

    return <Item card={item} />
  }

  renderEmptyComponent = () => {
    return (
      <EmptyListContainer>
        <EmptyIcon name="cards-outline" size={64} />
        <EmptyListText>No card found</EmptyListText>
      </EmptyListContainer>
    )
  }

  renderListHeaderComponent = () => {
    const { cards } = this.props
    if (!cards.length) {
      return <></>
    }
    return (
      <HeaderContainer>
        <HeaderText>Cards</HeaderText>
      </HeaderContainer>
    )
  }

  render() {
    const { style, animatedValue, cards } = this.props

    return (
      <AnimatedFlatList
        contentContainerStyle={{
          marginTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 16
        }}
        scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: animatedValue } }
            }
          ],
          { useNativeDriver: true } // <-- Add this
        )}
        style={style}
        data={cards}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ListHeaderComponent={this.renderListHeaderComponent}
        ListEmptyComponent={this.renderEmptyComponent}
      />
    )
  }
}
