import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';

export const store = configureStore({
  reducer: {
    navigation: navReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch