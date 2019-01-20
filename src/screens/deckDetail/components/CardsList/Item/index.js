import React from "react"

import { Container, Title, Text, Separator } from "./styles"

export default class Item extends React.Component {
  render() {
    const {
      card: { question, answer },
      ...rest
    } = this.props

    return (
      <Container {...rest}>
        <Title>Question:</Title>
        <Text>{question}</Text>
        <Separator />
        <Title>Answer</Title>
        <Text>{answer}</Text>
      </Container>
    )
  }
}
