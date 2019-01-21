import { call, put } from "redux-saga/effects"
import { AsyncStorage } from "react-native"

import { Creators as DecksActions } from "../ducks/decks"
import { initialData } from "../../utils/initialData"

const key = "@ReactNDFlashcards:decks"
const IS_USER_FIRST_TIME_KEY = "@ReactNDFlashcards:firstTime"

export function* addInitialData() {
  try {
    // yield call([AsyncStorage, "clear"])
    const data = yield call([AsyncStorage, "getItem"], IS_USER_FIRST_TIME_KEY)
    const isUserFirstTime = JSON.parse(data)

    // Populate with decks if is user first access
    if (!isUserFirstTime) {
      yield call(
        [AsyncStorage, "setItem"],
        IS_USER_FIRST_TIME_KEY,
        JSON.stringify(true)
      )

      // Add decks
      const decks = initialData
      yield call([AsyncStorage, "setItem"], key, JSON.stringify({ ...decks }))
      yield put(DecksActions.retrieveDecksSuccess(decks))
    }

    console.log("ISUSEFIRST", isUserFirstTime)

    yield put(DecksActions.retrieveDecksRequest())
  } catch (err) {}
}

export function* retrieveDecks() {
  try {
    // yield call([AsyncStorage, "clear"])
    const data = yield call([AsyncStorage, "getItem"], key)
    const decks = JSON.parse(data)

    // console.log(decks)
    yield put(DecksActions.retrieveDecksSuccess(decks))
  } catch (err) {}
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
  } catch (err) {}
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

    yield put(DecksActions.addCardSuccess(card, deckId))
  } catch (err) {}
}

export function* deleteDeck(action) {
  const { deckId } = action.payload

  try {
    // Retrieve data and parse them to an object
    const data = yield call([AsyncStorage, "getItem"], key)
    const decks = JSON.parse(data) || {}

    // delete deck
    const newDecks = { ...decks }
    delete newDecks[deckId]

    yield call(
      [AsyncStorage, "setItem"],
      key,
      JSON.stringify({
        ...newDecks
      })
    )

    yield put(DecksActions.deleteDeckSuccess(deckId))
  } catch (err) {}
}

export function* deleteCard(action) {
  const { deckId, cardId } = action.payload

  try {
    // Retrieve data and parse them to an object
    const data = yield call([AsyncStorage, "getItem"], key)
    const decks = JSON.parse(data) || {}

    const newDecks = {
      ...decks,
      [deckId]: {
        ...decks[deckId],
        cards: decks[deckId].cards.filter(card => card.id !== cardId)
      }
    }

    // Add card
    yield call(
      [AsyncStorage, "setItem"],
      key,
      JSON.stringify({
        ...newDecks
      })
    )

    yield put(DecksActions.deleteCardSuccess(deckId, cardId))
  } catch (err) {}
}
