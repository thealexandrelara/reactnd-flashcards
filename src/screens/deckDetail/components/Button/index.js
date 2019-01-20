import React from "react"

import { Container, Title, MaterialCommunityIcon, MaterialIcon } from "./styles"

const Button = ({ name, id, type, iconName, iconLibrary, ...rest }) => {
  const renderIcon = () => {
    if (iconLibrary === "MaterialIcons") {
      return <MaterialIcon name={iconName} size={48} type={type} />
    } else if (iconLibrary === "MaterialCommunityIcons") {
      return <MaterialCommunityIcon name={iconName} size={48} type={type} />
    } else {
      return ""
    }
  }

  return (
    <Container {...rest} type={type} disabled={type === "disabled"}>
      {renderIcon()}
      <Title type={type}>{name}</Title>
    </Container>
  )
}

export default Button
