import { combineReducers } from "redux"

import decks, { Selectors as DecksSelectors } from "./decks"
// import comments, { Selectors as CommentsSelectors } from './comments';
// import categories from './categories';

export default combineReducers({ decks })

export const Selectors = {
  decks: {
    getSingleDeck: (state, id) => DecksSelectors.getSingleDeck(state.decks, id)
  }
  //   posts: {
  //     getVisiblePosts: (state, category, sortBy, orderBy, searchTerm) =>
  //       PostsSelectors.getVisiblePosts(
  //         state.posts,
  //         category,
  //         sortBy,
  //         orderBy,
  //         searchTerm,
  //       ),
  //     getSinglePost: (state, id) => PostsSelectors.getSinglePost(state.posts, id),
  //     getIsFetching: state => PostsSelectors.getIsFetching(state.posts),
  //   },
  //   comments: {
  //     getVisibleComments: (state, postId) =>
  //       CommentsSelectors.getVisibleComments(state.comments, postId),
  //   },
}
