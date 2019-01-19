import { Dimensions } from "react-native"
import styled from "styled-components/native"
import UnstyledCardFlip from "react-native-card-flip"

const itemHeight = Dimensions.get("window").height * 0.6

export const CardFlip = styled(UnstyledCardFlip)`
  /* flex: 1; */
  justify-content: center;
  align-items: center;
`

export const AnswerContainer = styled.View`
  flex: 1;
  justify-content: center;
`

export const Card = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 32px 0;
  background-color: white;
  border-radius: 3px;
  height: ${itemHeight}px;

  /* box-shadow: 1px 11px 35px black; */
  /* box-shadow: 1px 11px 35px 5px; */
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
`
export const AnswerText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #4257b2;
`

export const AnswerDescriptionText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #e0e0e0;
`

export const AnswerButtonsContainer = styled.View`
  height: 80px;
  margin-bottom: 16px;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`
