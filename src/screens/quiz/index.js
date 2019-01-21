import React from "react"
import { StyleSheet, ScrollView } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import Swiper from "react-native-deck-swiper"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Creators as DecksActions } from "../../store/ducks/decks"

import { Container, Title, Instructions } from "./styles"
import Item from "./components/Item"
import Result from "./components/Result"
import {
  setLocalNotification,
  clearLocalNotification
} from "../../utils/notifications"

class Quiz extends React.Component {
  state = {
    isQuizFinished: false,
    cardIndex: 0,
    correctAnswers: 0,
    questions: this.props.navigation.state.params.deck.cards
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("title", "Quiz")}`,
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

  componentDidMount() {
    this.setTitleWithQuestionNumber()
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.cardIndex !== this.state.cardIndex) {
      this.setTitleWithQuestionNumber()
    }

    // If quiz was finished in the day, then delay the notification until the next day
    if (this.state.isQuizFinished) {
      this.delayNotificationUntilTomorrow()
    }
  }

  delayNotificationUntilTomorrow = async () => {
    await clearLocalNotification()
    await setLocalNotification()
  }

  resetQuiz = () => {
    this.setState({ isQuizFinished: false, cardIndex: 0, correctAnswers: 0 })
  }

  goBackToDeck = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  setTitleWithQuestionNumber = () => {
    const { cardIndex, questions } = this.state
    const { setParams } = this.props.navigation
    setParams({
      title: `Quiz ${cardIndex + 1}/${questions.length}`
    })
  }

  handleAnswer = (answer, id) => {
    const { cardIndex, questions } = this.state
    if (answer === "correct") {
      this.setState(prevState => ({
        correctAnswers: prevState.correctAnswers + 1
      }))
    }
    setTimeout(() => {
      this.swiper.swipeLeft()
      if (cardIndex + 1 >= questions.length) {
        this.setState(prevState => ({
          isQuizFinished: true
        }))
      }
    }, 1000)
  }

  _keyExtractor = item => item.id

  _renderItem = question => {
    return <Item question={question} onAnswer={this.handleAnswer} />
  }

  render() {
    const {
      navigation: {
        state: {
          params: { deck }
        }
      },
      ...rest
    } = this.props
    const { questions, cardIndex, isQuizFinished, correctAnswers } = this.state

    if (isQuizFinished) {
      return (
        <ScrollView>
          <Container style={{ justifyContent: "center" }}>
            <Title>Your Results</Title>
            <Result
              correctAnswers={correctAnswers}
              totalQuestions={questions.length}
              onResetQuiz={this.resetQuiz}
              onGoBackToDeck={this.goBackToDeck}
            />
          </Container>
        </ScrollView>
      )
    }

    return (
      <Container {...rest}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          cards={questions}
          keyExtractor={this._keyExtractor}
          renderCard={this._renderItem}
          onSwiped={cardIndex => {
            if (cardIndex + 1 < questions.length) {
              this.setState(prevState => ({
                cardIndex: prevState.cardIndex + 1
              }))
            }
          }}
          cardIndex={cardIndex}
          backgroundColor={"#fff"}
          stackSize={3}
          onTapCard={index => console.log(this.cards)}
          pointerEvents="box-none"
          disableBottomSwipe
          disableLeftSwipe
          disableRightSwipe
          disableTopSwipe
          stackAnimationFriction={100}
        >
          <Title>{deck.title}</Title>
          <Instructions>Tap on a card to check the answer</Instructions>
          {/* <Instructions>Swipe left to go to next question</Instructions> */}
        </Swiper>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Quiz)
