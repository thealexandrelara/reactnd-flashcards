import { State } from "react-native-gesture-handler"

export const Types = {
  ADD_INITIAL_DATA_REQUEST: "decks/ADD_INITIAL_DATA_REQUEST",
  RETRIEVE_DECKS_REQUEST: "decks/RETRIEVE_DECKS_REQUEST",
  RETRIEVE_DECKS_SUCCESS: "decks/RETRIEVE_DECKS_SUCCESS",
  ADD_DECK_REQUEST: "decks/ADD_DECK_REQUEST",
  ADD_DECK_SUCCESS: "decks/ADD_DECK_SUCCESS",
  ADD_CARD_REQUEST: "decks/ADD_CARD_REQUEST",
  ADD_CARD_SUCCESS: "decks/ADD_CARD_SUCCESS",
  DELETE_CARD_REQUEST: "decks/DELETE_CARD_REQUEST",
  DELETE_CARD_SUCCESS: "decks/DELETE_CARD_SUCCESS",
  DELETE_DECK_REQUEST: "decks/DELETE_DECK_REQUEST",
  DELETE_DECK_SUCCESS: "decks/DELETE_DECK_SUCCESS"
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
    case Types.DELETE_DECK_SUCCESS:
      const newState = { ...state }
      delete newState[action.payload.deckId]
      return newState
    case Types.DELETE_CARD_SUCCESS:
      const newDeletedCardState = {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          cards: state[action.payload.deckId].cards.filter(
            card => card.id !== action.payload.cardId
          )
        }
      }
      return newDeletedCardState
    default:
      return state
  }
}

export const Selectors = {
  getSingleDeck: (state, id) => state[id]
}

export const Creators = {
  addInitialDataRequest: () => ({
    type: Types.ADD_INITIAL_DATA_REQUEST
  }),
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
  deleteDeckRequest: deckId => ({
    type: Types.DELETE_DECK_REQUEST,
    payload: { deckId }
  }),
  deleteDeckSuccess: deckId => ({
    type: Types.DELETE_DECK_SUCCESS,
    payload: { deckId }
  }),
  addCardRequest: (card, deckId) => ({
    type: Types.ADD_CARD_REQUEST,
    payload: { card, deckId }
  }),
  addCardSuccess: (data, deckId) => ({
    type: Types.ADD_CARD_SUCCESS,
    payload: { data, deckId }
  }),
  deleteCardRequest: (deckId, cardId) => ({
    type: Types.DELETE_CARD_REQUEST,
    payload: { deckId, cardId }
  }),
  deleteCardSuccess: (deckId, cardId) => ({
    type: Types.DELETE_CARD_SUCCESS,
    payload: { deckId, cardId }
  })
}
