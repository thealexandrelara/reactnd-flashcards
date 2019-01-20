import React from "react"

import { Container, Title, MaterialCommunityIcon, MaterialIcon } from "./styles"

export default class Button extends React.Component {
  renderIcon = () => {
    const { iconName, iconLibrary, type } = this.props

    if (iconLibrary === "MaterialIcons") {
      return <MaterialIcon name={iconName} size={48} type={type} />
    } else if (iconLibrary === "MaterialCommunityIcons") {
      return <MaterialCommunityIcon name={iconName} size={48} type={type} />
    } else {
      return ""
    }
  }

  render() {
    const { name, id, type, ...rest } = this.props

    return (
      <Container {...rest} type={type}>
        {this.renderIcon()}
        {/* <MaterialCommunityIcon name="cards" size={48} /> */}
        <Title type={type}>{name}</Title>
      </Container>
    )
  }
}
