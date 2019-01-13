import React from "react";
import { FlatList, Text } from "react-native";

import { Container } from "./styles";
import { Item } from "react-native/Libraries/Components/Picker/Picker";

export default class DecksList extends React.Component {
  data = [{ id: 1, name: "React" }];

  render() {
    return (
      <Container>
        <FlatList
          data={this.data}
          renderItem={item => <Text>{Item.name}</Text>}
        />
      </Container>
    );
  }
}
