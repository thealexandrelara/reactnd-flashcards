import React from "react"
import { Animated, TouchableOpacity, Text } from "react-native"

import {
  EmptyListContainer,
  AnimatedFlatList,
  EmptyListText,
  EmptyIcon
} from "./styles"
import Item from "./Item"

const DecksList = props => {
  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => {
    const cardsCount = item.cards.length || 0

    return (
      <TouchableOpacity
        onPress={() => props.onListItemPressed(item.id)}
        activeOpacity={1}
      >
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

  const { style, animatedValue, decks } = props

  return (
    <AnimatedFlatList
      contentContainerStyle={{
        marginTop: 160,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 176 + decks.length * 8 + (decks.length / 10) * 16
      }}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [
          {
            nativeEvent: { contentOffset: { y: animatedValue } }
          }
        ],
        { useNativeDriver: true }
      )}
      style={style}
      data={decks}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={renderEmptyComponent}
    />
  )
}

export default DecksList
