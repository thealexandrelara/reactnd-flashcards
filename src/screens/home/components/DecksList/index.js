import React from "react"
import { Animated, TouchableOpacity } from "react-native"

import { Container, AnimatedFlatList } from "./styles"
import Item from "./Item"

export default class DecksList extends React.Component {
  data = [
    { id: "1", name: "React" },
    { id: "2", name: "React" },
    { id: "3", name: "React" },
    { id: "4", name: "React" },
    { id: "5", name: "React" },
    { id: "6", name: "React" },
    { id: "7", name: "React" },
    { id: "8", name: "React" },
    { id: "9", name: "React" },
    { id: "10", name: "React" },
    { id: "11", name: "React" },
    { id: "12", name: "React" },
    { id: "13", name: "React" },
    { id: "14", name: "React" },
    { id: "15", name: "React" },
    { id: "16", name: "React" },
    { id: "17", name: "React" },
    { id: "18", name: "React" },
    { id: "19", name: "React" }
    // { id: "20", name: "React" },
    // { id: "21", name: "React" },
    // { id: "22", name: "React" },
    // { id: "23", name: "React" },
    // { id: "24", name: "React" },
    // { id: "25", name: "React" },
    // { id: "26", name: "React" },
    // { id: "27", name: "React" },
    // { id: "28", name: "React" },
    // { id: "29", name: "React" },
    // { id: "30", name: "React" },
    // { id: "31", name: "React" },
    // { id: "32", name: "React" },
    // { id: "33", name: "React" },
    // { id: "34", name: "React" },
    // { id: "35", name: "React" },
    // { id: "36", name: "React" },
    // { id: "37", name: "React" },
    // { id: "38", name: "React" },
    // { id: "39", name: "React" },
    // { id: "40", name: "React" },
    // { id: "41", name: "React" },
    // { id: "4", name: "React" },
    // { id: "43", name: "React" },
    // { id: "44", name: "React" },
    // { id: "45", name: "React" },
    // { id: "46", name: "React" },
    // { id: "47", name: "React" },
    // { id: "48", name: "React" },
    // { id: "49", name: "React" },
    // { id: "50", name: "React" },
    // { id: "51", name: "React" },
    // { id: "52", name: "React" },
    // { id: "53", name: "React" },
    // { id: "54", name: "React" },
    // { id: "55", name: "React" },
    // { id: "56", name: "React" },
    // { id: "57", name: "React" },
    // { id: "58", name: "React" },
    // { id: "59", name: "React" },
    // { id: "60", name: "React" },
    // { id: "61", name: "React" },
    // { id: "62", name: "React" },
    // { id: "63", name: "React" },
    // { id: "64", name: "React" },
    // { id: "65", name: "React" },
    // { id: "66", name: "React" },
    // { id: "67", name: "React" },
    // { id: "68", name: "React" },
    // { id: "69", name: "React" },
    // { id: "70", name: "React" },
    // { id: "71", name: "React" },
    // { id: "72", name: "React" },
    // { id: "73", name: "React" },
    // { id: "74", name: "React" },
    // { id: "75", name: "React" },
    // { id: "76", name: "React" },
    // { id: "77", name: "React" },
    // { id: "78", name: "React" },
    // { id: "79", name: "React" },
    // { id: "80", name: "React" },
    // { id: "81", name: "React" },
    // { id: "82", name: "React" },
    // { id: "83", name: "React" },
    // { id: "84", name: "React" },
    // { id: "85", name: "React" },
    // { id: "86", name: "React" },
    // { id: "87", name: "React" },
    // { id: "88", name: "React" },
    // { id: "89", name: "React" },
    // { id: "90", name: "React" },
    // { id: "91", name: "React" },
    // { id: "92", name: "React" },
    // { id: "93", name: "React" },
    // { id: "94", name: "React" },
    // { id: "95", name: "React" },
    // { id: "96", name: "React" },
    // { id: "97", name: "React" },
    // { id: "98", name: "React" },
    // { id: "99", name: "React" }
  ]

  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.onListItemPressed()}>
      <Item name={item.name} id={item.id} />
    </TouchableOpacity>
  )

  render() {
    const { style, animatedValue } = this.props
    console.log(this.props)

    return (
      <AnimatedFlatList
        contentContainerStyle={{
          marginTop: 160,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom:
            176 + this.data.length * 8 + (this.data.length / 10) * 16
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
        data={this.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}
