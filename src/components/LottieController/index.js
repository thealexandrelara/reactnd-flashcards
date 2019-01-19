import React from "react"

import { Container, StyledLottie } from "./styles"
import DeckAnimation from "../../assets/animations/deck.json"

export default class LottieController extends React.Component {
  state = {
    animation: null,
    speed: 1
  }

  componentDidMount() {
    this._playAnimation()
  }

  _changeSpeed = speed => {
    this.setState({ speed })
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      console.log("state animation")
      this._loadAnimation()
    } else {
      this.animation.reset()
      this.animation.play()
    }
  }

  _stopAnimation = () => {
    this.animation.reset()
  }

  _loadAnimation = () => {
    const { animation } = this.props
    this.setState({ animation: animation }, this._playAnimation)
  }

  render() {
    const {
      loop,
      flipHorizontal,
      elementWidth,
      elementHeight,
      ...rest
    } = this.props

    return (
      <Container {...rest}>
        {this.state.animation && (
          <StyledLottie
            ref={animation => {
              this.animation = animation
            }}
            source={this.state.animation}
            speed={this.state.speed}
            loop={loop}
            flipHorizontal={flipHorizontal}
            elementWidth={elementWidth}
            elementHeight={elementHeight}
          />
        )}
      </Container>
    )
  }
}
