import React from "react"
import { Provider } from "react-redux"

import store from "./src/store"
import AppContainer from "./src/routes"
import {
  setLocalNotification,
  getIsLocalNotificationSet
} from "./src/utils/notifications"

export default class App extends React.Component {
  componentDidMount = async () => {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
