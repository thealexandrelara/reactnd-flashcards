import { call, put } from "redux-saga/effects"
import { AsyncStorage } from "react-native"
import api from "../../services/api"

import { Creators as DecksActions } from "../ducks/decks"

const key = "@ReactNDFlashcards:decks"

export function* retrieveDecks() {
  try {
    const data = yield call([AsyncStorage, "getItem"], key)
    const decks = JSON.parse(data)

    yield put(DecksActions.retrieveDecksSuccess(decks))
  } catch (err) {
    yield put()
    // DecksActions.retrieveDecksError(
    //   "An error has occurred. Please, refresh the page."
    // )
  }
}

export function* addDeck(action) {
  const { deck, id } = action.payload

  try {
    // Retrieve data and parse them to an object
    const data = yield call([AsyncStorage, "getItem"], key)
    const decks = JSON.parse(data)

    // Add deck
    yield call([AsyncStorage, "setItem"], key, { ...decks, [id]: { deck } })

    yield put(DecksActions.addDeckSuccess(deck, id))
  } catch (err) {
    yield put(
      DecksActions.addDeckError(
        "An error has occurred. Please, refresh the page."
      )
    )
  }
}
