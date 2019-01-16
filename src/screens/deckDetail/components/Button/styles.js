import styled from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 3px;
  min-height: 80px;
  border-bottom-width: 4px;
  border-bottom-color: #4257b2;

  /* box-shadow: 1px 11px 35px black; */
  /* box-shadow: 1px 11px 35px 5px; */
  shadow-color: #000;
  shadow-offset: 5px 10px;
  shadow-opacity: 0.03;
  shadow-radius: 2px;
`;

export const Title = styled.Text`
  margin-top: 8px;
  text-align: center;
  font-weight: bold;
  color: #4257b2;
`;

export const MaterialCommunityIcon = styled(MaterialCommunityIcons)`
  color: #4257b2;
`;

export const MaterialIcon = styled(MaterialIcons)`
  color: #4257b2;
`;
