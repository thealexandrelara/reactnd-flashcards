import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import _ from "lodash"

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

export default class Item extends React.Component {
  _answered = false

  handleClickCard = () => {
    this.card.flip()
  }

  handleClickIncorrect = _.debounce(() => {
    const { question, onAnswer } = this.props
    if (!this._answered) {
      this.incorrectButton._playAnimation()
      onAnswer("incorrect", question.id)
      this._answered = true
    }
  }, 100)

  handleClickCorrect = _.debounce(() => {
    const { question, onAnswer } = this.props
    if (!this._answered) {
      this.correctButton._playAnimation()
      onAnswer("correct", question.id)
      this._answered = true
    }
  }, 100)

  saveRef = card => (this.card = card)

  render() {
    const {
      question: { question, answer },
      ...rest
    } = this.props

    return (
      <CardFlip {...rest} ref={this.saveRef}>
        <TouchableWithoutFeedback onPress={this.handleClickCard}>
          <Card>
            <AnswerText>{question}</AnswerText>
          </Card>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.handleClickCard}>
          <Card>
            <AnswerContainer>
              <AnswerText>{answer}</AnswerText>
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
