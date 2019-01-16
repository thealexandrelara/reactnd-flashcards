export const Types = {
  RETRIEVE_DECKS_REQUEST: "decks/RETRIEVE_DECKS_REQUEST",
  RETRIEVE_DECKS_SUCCESS: "decks/RETRIEVE_DECKS_SUCCESS",
  RETRIEVE_DECKS_ERROR: "decks/RETRIEVE_DECKS_ERROR",
  ADD_DECK_REQUEST: "decks/ADD_DECK_REQUEST",
  ADD_DECK_SUCCESS: "decks/ADD_DECK_SUCCESS",
  ADD_DECK_ERROR: "decks/ADD_DECK_ERROR"
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
    default:
      return state
  }
}

export const Creators = {
  retrieveDecksRequest: () => ({
    type: Types.RETRIEVE_DECKS_REQUEST
  }),
  retrieveDecksSuccess: data => ({
    type: Types.RETRIEVE_DECKS_SUCCESS,
    payload: { data }
  }),
  addDeckRequest: title => ({
    type: Types.ADD_DECK_REQUEST,
    payload: { title }
  }),
  addDeckSuccess: (data, deckId) => ({
    type: Types.ADD_DECK_SUCCESS,
    payload: { data, deckId }
  })
}
