import React from "react"
import { TextInput } from "react-native"
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements"

import { Container, SubmitButton } from "./styles"

export default class AddCard extends React.Component {
  state = {
    question: "",
    answer: ""
  }
  static navigationOptions = {
    header: () => null
  }

  onChangeQuestionText = value => this.setState({ question: value })
  onChangeAnswerText = value => this.setState({ answer: value })

  render() {
    const inputStyle = { margin: 15 }
    const { ...rest } = this.props
    const { question, answer } = this.state

    return (
      <Container {...rest}>
        <FormLabel>Question</FormLabel>
        <FormInput onChangeText={this.onChangeQuestionText} />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <FormLabel>Answer</FormLabel>
        <FormInput onChangeText={this.onChangeAnswerText} />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <SubmitButton
          title="SUBMIT"
          backgroundColor="#4257b2"
          borderRadius={3}
          onPress={() => this.props.navigation.goBack()}
        />
      </Container>
    )
  }
}
