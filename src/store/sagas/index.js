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
import { retrieveDecks } from "./decks"

export default function* rootSaga() {
  yield all([
    takeLatest(DecksTypes.RETRIEVE_DECKS_REQUEST, retrieveDecks)
    // takeLatest(PostsTypes.RETRIEVE_SINGLE_POST_REQUEST, retrieveSinglePost),
    // takeLatest(PostsTypes.VOTE_IN_POST_REQUEST, voteInPost),
    // takeLatest(PostsTypes.ADD_POST_REQUEST, addPost),
    // takeLatest(PostsTypes.EDIT_POST_REQUEST, editPost),
    // takeLatest(PostsTypes.DELETE_POST_REQUEST, deletePost),
    // takeLatest(CommentsTypes.RETRIEVE_COMMENTS_REQUEST, retrieveComments),
    // takeLatest(CommentsTypes.VOTE_IN_COMMENT_REQUEST, voteInComment),
    // takeLatest(CommentsTypes.ADD_COMMENT_REQUEST, addComment),
    // takeLatest(CommentsTypes.EDIT_COMMENT_REQUEST, editComment),
    // takeLatest(CommentsTypes.DELETE_COMMENT_REQUEST, deleteComment),
    // takeLatest(CategoriesTypes.RETRIEVE_CATEGORIES_REQUEST, retrieveCategories),
  ])
}
