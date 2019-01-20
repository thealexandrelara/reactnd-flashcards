import React from "react"
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native"

import {
  Container,
  CardFlip,
  Card,
  ButtonsContainer,
  AnswerContainer,
  AnswerText,
  AnswerDescriptionText,
  AnswerButtonsContainer
} from "./styles"
import LottieController from "../../../../components/LottieController"
import CorrectAnimation from "../../../../assets/animations/correct.json"
import IncorrectAnimation from "../../../../assets/animations/incorrect.json"

import { Animated } from "react-native"

export default class Item extends React.Component {
  componentDidMount() {
    console.log("MOUNTED")
  }

  handleClickCard = () => {
    console.log("text")
    this.card.flip()
  }

  handleClickIncorrect = () => {
    const { question, onAnswer } = this.props
    this.incorrectButton._playAnimation()
    onAnswer("incorrect", question.id)
  }

  handleClickCorrect = () => {
    const { question, onAnswer } = this.props
    this.correctButton._playAnimation()
    onAnswer("correct", question.id)
  }

  saveRef = card => (this.card = card)

  render() {
    const { question, ...rest } = this.props

    return (
      <CardFlip {...rest} ref={this.saveRef}>
        <TouchableWithoutFeedback onPress={this.handleClickCard}>
          <Card>
            <AnswerText>What is React?</AnswerText>
          </Card>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.handleClickCard}>
          <Card>
            <AnswerContainer>
              <AnswerText>A library for managing user interfaces</AnswerText>
            </AnswerContainer>
            <AnswerButtonsContainer>
              <AnswerDescriptionText>Your answer was</AnswerDescriptionText>
              <ButtonsContainer>
                <TouchableWithoutFeedback
                  onPress={this.handleClickIncorrect}
                  style={{ marginRight: 12 }}
                >
                  <LottieController
                    animation={IncorrectAnimation}
                    elementHeight={100}
                    elementWidth={100}
                    flipHorizontal={true}
                    loop={false}
                    ref={lottie => (this.incorrectButton = lottie)}
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={this.handleClickCorrect}
                  style={{ marginRight: 12 }}
                >
                  <LottieController
                    animation={CorrectAnimation}
                    elementHeight={100}
                    elementWidth={100}
                    flipHorizontal={false}
                    loop={false}
                    ref={lottie => (this.correctButton = lottie)}
                  />
                </TouchableWithoutFeedback>
              </ButtonsContainer>
            </AnswerButtonsContainer>
          </Card>
        </TouchableWithoutFeedback>
      </CardFlip>
    )
  }
}
