import React from "react"
import { TextInput } from "react-native"
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements"

import { Container, SubmitButton } from "./styles"

export default class AddDeck extends React.Component {
  static navigationOptions = {
    title: "Add deck"
  }

  state = {
    title: ""
  }

  onChangeText = value => this.setState({ title: value })

  render() {
    const inputStyle = { margin: 15 }
    const { ...rest } = this.props
    const { title } = this.state

    return (
      <Container {...rest}>
        <FormLabel>Title</FormLabel>
        <FormInput onChangeText={this.onChangeText} />
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
