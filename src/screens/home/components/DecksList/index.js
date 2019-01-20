import React from "react"
import { Animated, TouchableOpacity, Text } from "react-native"

import {
  EmptyListContainer,
  AnimatedFlatList,
  EmptyListText,
  EmptyIcon
} from "./styles"
import Item from "./Item"

export default class DecksList extends React.Component {
  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => {
    console.log(item)
    const cardsCount = item.cards.length || 0

    return (
      <TouchableOpacity onPress={() => this.props.onListItemPressed(item.id)}>
        <Item name={item.title} id={item.id} cardsCount={cardsCount} />
      </TouchableOpacity>
    )
  }

  renderEmptyComponent = () => {
    return (
      <EmptyListContainer>
        <EmptyIcon name="cards-outline" size={64} />
        <EmptyListText>No deck found</EmptyListText>
      </EmptyListContainer>
    )
  }

  render() {
    const { style, animatedValue, decks } = this.props

    return (
      <AnimatedFlatList
        contentContainerStyle={{
          marginTop: 160,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 176 + decks.length * 8 + (decks.length / 10) * 16
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
        data={decks}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ListEmptyComponent={this.renderEmptyComponent}
      />
    )
  }
}