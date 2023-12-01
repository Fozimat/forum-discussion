import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from "../states/authUser/reducer";
import isPreloadReducer from "../states/isPreload/reducer";
import leaderboardsReducer from "../states/leaderboards/reducer";
import threadsReducer from "../states/threads/reducer";
import threadDetailReducer from "../states/threadDetail/reducer";
import usersReducer from "../states/users/reducer";

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
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});

export default store;