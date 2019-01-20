import React from "react"
import { KeyboardAvoidingView, ScrollView, View } from "react-native"
import { FormLabel, FormInput } from "react-native-elements"
import Ionicons from "@expo/vector-icons/Ionicons"
import uuid from "uuid"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as DecksActions } from "../../store/ducks/decks"

import LottieController from "../../components/LottieController"
import DeckAnimation from "../../assets/animations/deck.json"

import { Container, SubmitButton, FormContainer } from "./styles"

class AddCard extends React.Component {
  state = {
    question: "",
    answer: ""
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Add deck",
    headerLeft: () => (
      <Ionicons
        name={"ios-close"}
        onPress={() => {
          // console.log(navigation)
          navigation.goBack()
        }}
        size={48}
        color="white"
        style={{ marginLeft: 16 }}
      />
    )
  })

  onChangeQuestionText = value => this.setState({ question: value })
  onChangeAnswerText = value => this.setState({ answer: value })

  handleSubmit = () => {
    const { navigation, addCardRequest } = this.props
    const { question, answer } = this.state
    const id = uuid.v4().replace(/-/g, "")
    const deckId = navigation.getParam("deckId", "")

    if (!!deckId) {
      addCardRequest({ id, question, answer, timestamp: Date.now() }, deckId)
    }
    navigation.goBack()
  }

  render() {
    const { ...rest } = this.props
    const { question, answer } = this.state

    return (
      <Container {...rest}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={65}
            enabled
            style={{ flex: 1 }}
          >
            <LottieController
              animation={DeckAnimation}
              loop={true}
              flipHorizontal={true}
            />
            <FormLabel>Question</FormLabel>
            <FormInput
              onChangeText={this.onChangeQuestionText}
              underlineColorAndroid="#e0e0e0"
            />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}
            <FormLabel>Answer</FormLabel>
            <FormInput
              onChangeText={this.onChangeAnswerText}
              underlineColorAndroid="#e0e0e0"
            />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}
            <SubmitButton
              title="SUBMIT"
              backgroundColor="#4257b2"
              borderRadius={3}
              onPress={this.handleSubmit}
              disabled={!question || !answer}
            />
            <View style={{ flex: 1 }} />
          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(AddCard)
