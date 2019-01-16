import React from "react"
import { TouchableOpacity } from "react-native"

import { Container, Title, MaterialCommunityIcon, MaterialIcon } from "./styles"

export default class Button extends React.Component {
  renderIcon = () => {
    const { iconName, iconLibrary } = this.props

    if (iconLibrary === "MaterialIcons") {
      return <MaterialIcon name={iconName} size={48} />
    } else if (iconLibrary === "MaterialCommunityIcons") {
      return <MaterialCommunityIcon name={iconName} size={48} />
    } else {
      return ""
    }
  }

  render() {
    const { name, id, ...rest } = this.props

    return (
      <Container {...rest}>
        {this.renderIcon()}
        {/* <MaterialCommunityIcon name="cards" size={48} /> */}
        <Title>{name}</Title>
      </Container>
    )
  }
}
