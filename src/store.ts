import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { SearchState, searchSlice } from "./store/search/searchSlice";
import {
  BookmarkedEventsState,
  bookedmarkedEventsSlice,
} from "./store/BookmarkedEvents/bookmarkedEventsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  search: searchSlice.reducer,
  bookmarkedEvents: bookedmarkedEventsSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export interface RootState {
  search: SearchState;
  bookmark: BookmarkedEventsState;
}
