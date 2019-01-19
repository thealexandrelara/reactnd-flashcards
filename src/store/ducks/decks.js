import { State } from "react-native-gesture-handler"

export const Types = {
  RETRIEVE_DECKS_REQUEST: "decks/RETRIEVE_DECKS_REQUEST",
  RETRIEVE_DECKS_SUCCESS: "decks/RETRIEVE_DECKS_SUCCESS",
  RETRIEVE_DECKS_ERROR: "decks/RETRIEVE_DECKS_ERROR",
  ADD_DECK_REQUEST: "decks/ADD_DECK_REQUEST",
  ADD_DECK_SUCCESS: "decks/ADD_DECK_SUCCESS",
  ADD_DECK_ERROR: "decks/ADD_DECK_ERROR",
  ADD_CARD_REQUEST: "decks/ADD_CARD_REQUEST",
  ADD_CARD_SUCCESS: "decks/ADD_CARD_SUCCESS",
  ADD_CARD_ERROR: "decks/ADD_CARD_ERROR"
}

const INITIAL_STATE = {}

export default function decks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.RETRIEVE_DECKS_SUCCESS:
      return { ...action.payload.data }
    case Types.ADD_DECK_SUCCESS:
      return {
        ...state,
        [action.payload.deckId]: action.payload.data
      }
    case Types.ADD_CARD_SUCCESS:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          cards: [action.payload.data, ...state[action.payload.deckId].cards]
        }
      }
    default:
      return state
  }
}

export const Selectors = {
  getSingleDeck: (state, id) => state[id]
}

export const Creators = {
  retrieveDecksRequest: () => ({
    type: Types.RETRIEVE_DECKS_REQUEST
  }),
  retrieveDecksSuccess: data => ({
    type: Types.RETRIEVE_DECKS_SUCCESS,
    payload: { data }
  }),
  addDeckRequest: (deck, id) => ({
    type: Types.ADD_DECK_REQUEST,
    payload: { deck, id }
  }),
  addDeckSuccess: (data, deckId) => ({
    type: Types.ADD_DECK_SUCCESS,
    payload: { data, deckId }
  }),
  addCardRequest: (card, deckId) => ({
    type: Types.ADD_CARD_REQUEST,
    payload: { card, deckId }
  }),
  addCardSuccess: (data, deckId) => ({
    type: Types.ADD_CARD_SUCCESS,
    payload: { data, deckId }
  })
}
