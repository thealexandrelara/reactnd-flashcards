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
  shadow-color: #000;
  shadow-offset: 5px 10px;
  shadow-opacity: 0.03;
  shadow-radius: 2px;
`

export const Title = styled.Text`
  font-weight: bold;
  color: #4257b2;
`
export const CardsCount = styled.Text`
  margin-top: 6px;
  color: #9e9e9e;
`
