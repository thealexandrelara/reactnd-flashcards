import React from "react"
import { FlatList, Text } from "react-native"

import { Container, Title, CardsCount } from "./styles"

const Item = ({ name, id, cardsCount, ...rest }) => (
  <Container {...rest}>
    <Title>{name}</Title>
    <CardsCount>
      {cardsCount} {cardsCount.length < 2 ? "card" : "cards"}
    </CardsCount>
  </Container>
)

export default Item
