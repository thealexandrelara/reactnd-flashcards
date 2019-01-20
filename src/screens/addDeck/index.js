import React from "react"
import { KeyboardAvoidingView, ScrollView, View, Platform } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import uuid from "uuid"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as DecksActions } from "../../store/ducks/decks"

import { Container, FormLabel, FormInput, SubmitButton } from "./styles"
import LottieController from "../../components/LottieController"
import DeckAnimation from "../../assets/animations/deck.json"

class AddDeck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Add deck",
    headerLeft: () => (
      <Ionicons
        name={"ios-close"}
        onPress={() => {
          navigation.goBack()
        }}
        size={48}
        color="white"
        style={{ marginLeft: 16 }}
      />
    )
  })

  state = {
    title: "",
    error: null
  }

  onChangeText = value => this.setState({ title: value, error: null })

  handleSubmit = () => {
    const { navigation, addDeckRequest } = this.props
    const { title } = this.state
    const id = uuid.v4().replace(/-/g, "")
    addDeckRequest({ id, title, timestamp: Date.now(), cards: [] }, id)
    navigation.goBack()
    setTimeout(() => {
      navigation.state.params.onAddDeck(id)
    }, 300)
  }

  render() {
    const { ...rest } = this.props
    const { title } = this.state

    return (
      <Container {...rest}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.select({ ios: 85, android: 100 })}
            enabled
            style={{ flex: 1 }}
          >
            <LottieController
              animation={DeckAnimation}
              loop={true}
              flipHorizontal
            />
            <FormLabel>Title</FormLabel>
            <FormInput
              onChangeText={this.onChangeText}
              underlineColorAndroid="#e0e0e0"
            />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}
            <SubmitButton
              title="CREATE DECK"
              backgroundColor="#4257b2"
              borderRadius={3}
              onPress={this.handleSubmit}
              disabled={!title}
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
)(AddDeck)
