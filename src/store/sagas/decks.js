import { call, put } from "redux-saga/effects"
import { AsyncStorage } from "react-native"

import { Creators as DecksActions } from "../ducks/decks"

const key = "@ReactNDFlashcards:decks"

export function* retrieveDecks() {
  try {
    // yield call([AsyncStorage, "clear"])
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
    const decks = JSON.parse(data) || {}

    // Add deck
    yield call(
      [AsyncStorage, "setItem"],
      key,
      JSON.stringify({ ...decks, [id]: { ...deck } })
    )

    yield put(DecksActions.addDeckSuccess(deck, id))
  } catch (err) {
    yield put()
    // DecksActions.addDeckError(
    //   "An error has occurred. Please, refresh the page."
    // )
  }
}

export function* addCard(action) {
  const { card, deckId } = action.payload

  try {
    // Retrieve data and parse them to an object
    const data = yield call([AsyncStorage, "getItem"], key)
    const decks = JSON.parse(data) || {}

    // Add card
    yield call(
      [AsyncStorage, "setItem"],
      key,
      JSON.stringify({
        ...decks,
        [deckId]: { ...decks[deckId], cards: [card, ...decks[deckId].cards] }
      })
    )

    console.log(card)
    console.log(deckId)
    console.log(data)
    console.log(decks)

    yield put(DecksActions.addCardSuccess(card, deckId))
  } catch (err) {
    console.log("error ", err)
    yield put()
    // DecksActions.addCardError(
    //   "An error has occurred. Please, refresh the page."
    // )
  }
}

export function* deleteDeck(action) {
  const { deckId } = action.payload

  try {
    // Retrieve data and parse them to an object
    const data = yield call([AsyncStorage, "getItem"], key)
    const decks = JSON.parse(data) || {}

    const newDecks = { ...decks }
    delete newDecks[deckId]

    // Add card
    yield call(
      [AsyncStorage, "setItem"],
      key,
      JSON.stringify({
        ...newDecks
      })
    )

    yield put(DecksActions.deleteDeckSuccess(deckId))
  } catch (err) {
    console.log("error ", err)
    yield put()
    // DecksActions.addCardError(
    //   "An error has occurred. Please, refresh the page."
    // )
  }
}
