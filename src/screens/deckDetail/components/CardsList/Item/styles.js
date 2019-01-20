import styled from "styled-components/native"

export const Container = styled.View`
  justify-content: center;
  padding: 16px;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 3px;
  min-height: 60px;

  /* box-shadow: 1px 11px 35px black; */
  /* box-shadow: 1px 11px 35px 5px; */
  elevation: 4;
  shadow-color: grey;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
`

export const Title = styled.Text`
  font-weight: bold;
  color: #4257b2;
`
export const Text = styled.Text`
  color: #9e9e9e;
`

export const Separator = styled.View`
  margin: 16px 0px;
  height: 1px;
  background-color: #e0e0e0;
`
