import React from "react"
import { Animated, TouchableOpacity, Text } from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as DecksActions } from "../../../../store/ducks/decks"

import {
  AnimatedFlatList,
  EmptyListContainer,
  EmptyListText,
  EmptyIcon,
  HeaderContainer,
  HeaderText
} from "./styles"
import Item from "./Item"

const CardsList = props => {
  const keyExtractor = (item, index) => item.id

  const renderItem = ({ item }) => {
    return <Item card={item} onDeleteCard={handleCardDelete} />
  }

  const renderEmptyComponent = () => {
    return (
      <EmptyListContainer>
        <EmptyIcon name="cards-outline" size={64} />
        <EmptyListText>No card found</EmptyListText>
      </EmptyListContainer>
    )
  }

  const renderListHeaderComponent = () => {
    const { cards } = props
    if (!cards.length) {
      return <></>
    }
    return (
      <HeaderContainer>
        <HeaderText>Cards</HeaderText>
      </HeaderContainer>
    )
  }

  const handleCardDelete = cardId => {
    const { deckId, deleteCardRequest } = props

    deleteCardRequest(deckId, cardId)
  }

  const { style, animatedValue, cards } = props

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
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={renderListHeaderComponent}
      ListEmptyComponent={renderEmptyComponent}
    />
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(CardsList)
