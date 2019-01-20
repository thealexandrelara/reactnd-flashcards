import { Dimensions } from "react-native"
import { Button } from "react-native-elements"
import styled from "styled-components/native"

// const itemHeight = Dimensions.get("window").height * 0.6
const itemWidth = Dimensions.get("window").width * 0.9

export const Card = styled.View`
  /* justify-content: center; */
  align-items: center;
  padding: 16px;
  margin: 32px 0;
  background-color: white;
  border-radius: 3px;
  width: ${itemWidth}px;

  elevation: 4;
  shadow-color: grey;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
`

export const ResultsContainer = styled.View`
  /* flex: 1; */
  align-items: center;
`

export const ResultText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #9fa8da;
`
export const ResultPercentage = styled.Text`
  margin-top: 4px;
  font-weight: bold;
  font-size: 80px;
  text-align: center;
  color: #4257b2;
`

export const AnswerButtonsContainer = styled.View`
  width: 100%;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const SubmitButton = styled(Button)``
