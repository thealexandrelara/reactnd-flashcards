import styled from "styled-components/native"
import { Button } from "react-native-elements"
import {
  FormLabel as UnstyledFormLabel,
  FormInput as UnstyledFormInput,
  FormValidationMessage
} from "react-native-elements"

export const Container = styled.SafeAreaView`
  /* justify-content: flex-end; */
`

export const SubmitButton = styled(Button)`
  margin-top: 32px;
`

export const FormLabel = styled(UnstyledFormLabel)``
export const FormInput = styled(UnstyledFormInput)``
