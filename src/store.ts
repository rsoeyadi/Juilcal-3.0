import { configureStore } from "@reduxjs/toolkit";
import { SearchState, searchSlice } from "./store/search/searchSlice";
import {
  BookmarkedEventsState,
  bookedmarkedEventsSlice,
} from "./store/BookmarkedEvents/bookmarkedEventsSlice";

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
    bookmarkedEvents: bookedmarkedEventsSlice.reducer,
  },
});

export interface RootState {
  search: SearchState;
  bookmark: BookmarkedEventsState;
}
