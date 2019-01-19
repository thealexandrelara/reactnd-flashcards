import styled from "styled-components/native"
import { Button } from "react-native-elements"
import { DangerZone } from "expo"
const { Lottie } = DangerZone

export const Container = styled.View``

export const StyledLottie = styled(Lottie)`
  width: ${props => props.elementWidth || "100%"};
  height: ${props => props.elementHeight || "200px"};

  ${({ flipHorizontal }) => flipHorizontal && `transform: rotate(180deg);`}

  /* ${props => (props.flipHorizontal ? "transform: rotate(180deg);" : "")} */
`
