import { all, takeLatest } from "redux-saga/effects"

// import PostsTypes from '../ducks/posts/types';
// import {
//   retrievePosts,
//   retrieveSinglePost,
//   voteInPost,
//   addPost,
//   editPost,
//   deletePost,
// } from './posts';

// import CommentsTypes from '../ducks/comments/types';
// import {
//   retrieveComments,
//   voteInComment,
//   addComment,
//   editComment,
//   deleteComment,
// } from './comments';

import { Types as DecksTypes } from "../ducks/decks"
import {
  retrieveDecks,
  addDeck,
  addCard,
  deleteDeck,
  deleteCard,
  addInitialData
} from "./decks"

export default function* rootSaga() {
  yield all([
    takeLatest(DecksTypes.ADD_INITIAL_DATA_REQUEST, addInitialData),
    takeLatest(DecksTypes.RETRIEVE_DECKS_REQUEST, retrieveDecks),
    takeLatest(DecksTypes.ADD_DECK_REQUEST, addDeck),
    takeLatest(DecksTypes.DELETE_DECK_REQUEST, deleteDeck),
    takeLatest(DecksTypes.ADD_CARD_REQUEST, addCard),
    takeLatest(DecksTypes.DELETE_CARD_REQUEST, deleteCard)
  ])
}
