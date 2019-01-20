import React from "react"
import { Dimensions } from "react-native"

import {
  Card,
  ResultsContainer,
  AnswerButtonsContainer,
  ResultPercentage,
  ResultText,
  SubmitButton
} from "./styles"
import LottieController from "../../../../components/LottieController"
import DeadpoolAnimation from "../../../../assets/animations/deadpool.json"
import DuckBlackPowerAnimation from "../../../../assets/animations/duck_black_power.json"
import DinoDanceAnimation from "../../../../assets/animations/dino_dance.json"

const itemWidth = Dimensions.get("window").width * 0.8

export default class Result extends React.Component {
  handleClickCard = () => {
    this.card.flip()
  }

  saveRef = card => (this.card = card)

  handleResultStatsElements = (correctAnswers, totalQuestions) => {
    const percentage = (correctAnswers / totalQuestions) * 100
    if (percentage < 40) {
      return {
        animation: DeadpoolAnimation,
        text: "Oh no! You can do better than that!",
        width: itemWidth,
        height: 150,
        marginTop: -50
      }
    } else if (percentage >= 40 && percentage < 80) {
      return {
        animation: DinoDanceAnimation,
        text: "You did good! But you can still improve."
      }
    } else {
      return {
        animation: DuckBlackPowerAnimation,
        text: "You're awesome!"
      }
    }
  }

  render() {
    const {
      correctAnswers,
      totalQuestions,
      onResetQuiz,
      onGoBackToDeck,
      ...rest
    } = this.props
    const resultStats = this.handleResultStatsElements(
      correctAnswers,
      totalQuestions
    )

    return (
      <Card>
        <ResultsContainer>
          <LottieController
            animation={resultStats.animation}
            elementHeight={resultStats.height || 100}
            elementWidth={resultStats.width || 100}
            loop={true}
            ref={lottie => (this.incorrectButton = lottie)}
          />
          <ResultText style={{ marginTop: 16 }}>
            You got {correctAnswers} out of {totalQuestions}
          </ResultText>
          <ResultPercentage>
            {parseInt((correctAnswers / totalQuestions) * 100)}%
          </ResultPercentage>
          <ResultText>{resultStats.text}</ResultText>
        </ResultsContainer>
        <AnswerButtonsContainer>
          <SubmitButton
            title="Restart Quiz"
            borderRadius={3}
            onPress={this.handleSubmit}
            backgroundColor="#4257b2"
            containerViewStyle={{
              borderWidth: 1,
              borderColor: "#4257b2",
              width: "90%",
              marginTop: 16
            }}
            textStyle={{ color: "#fff" }}
            onPress={onResetQuiz}
          />
          <SubmitButton
            title="Back to Deck"
            borderRadius={3}
            onPress={this.handleSubmit}
            containerViewStyle={{
              borderWidth: 1,
              borderColor: "#4257b2",
              width: "90%",
              marginTop: 8
            }}
            textStyle={{ color: "#4257b2" }}
            transparent
            onPress={onGoBackToDeck}
          />
        </AnswerButtonsContainer>
      </Card>
    )
  }
}
