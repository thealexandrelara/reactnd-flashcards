import React from "react"

import { Container, Title, Text, Separator, SubmitButton } from "./styles"

const Item = ({ card: { question, answer, id }, onDeleteCard, ...rest }) => (
  <Container {...rest}>
    <Title>Question:</Title>
    <Text>{question}</Text>
    <Separator />
    <Title>Answer</Title>
    <Text>{answer}</Text>
    <SubmitButton
      title="Delete"
      borderRadius={3}
      onPress={() => onDeleteCard(id)}
      icon={{ name: "delete", color: "#ef5350" }}
      containerViewStyle={{
        borderWidth: 1,
        borderColor: "#ef5350",
        width: "50%",
        marginTop: 16,
        alignSelf: "center"
      }}
      textStyle={{ color: "#ef5350" }}
      transparent
    />
  </Container>
)

export default Item
