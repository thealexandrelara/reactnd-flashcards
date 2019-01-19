import styled from "styled-components/native"
import { Button } from "react-native-elements"

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #4257b2;

  margin-top: 16px;
`

export const Instructions = styled.Text`
  font-weight: bold;
  margin-top: 8px;
  font-size: 16px;
  text-align: center;
  color: #9e9e9e;
`

export const SubmitButton = styled(Button)`
  margin-top: 32px;
`
