import React from "react"
import { Provider } from "react-redux"

import store from "./src/store"
import AppContainer from "./src/routes"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
