import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import usersReducer from './users/reducer';

const rootReducer = {
  authUser: authUserReducer,
  isPreload: isPreloadReducer,
  users: usersReducer,
  leaderboards: leaderboardsReducer,
  threads: threadsReducer,
  threadDetail: threadDetailReducer,
  loadingBar: loadingBarReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

export default store;
