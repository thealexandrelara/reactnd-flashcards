import React from "react"
import { Animated, TouchableOpacity } from "react-native"

import { Container, AnimatedFlatList } from "./styles"
import Item from "./Item"

export default class DecksList extends React.Component {
  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.onListItemPressed(item.id)}>
      <Item name={item.title} id={item.id} cardsCount={item.cards.length} />
    </TouchableOpacity>
  )

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
      />
    )
  }
}
