import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./store/search/searchSlice";
import { bookedmarkedEventsSlice } from "./store/BookmarkedEvents/bookmarkedEvents";

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
    bookmarkedEvents: bookedmarkedEventsSlice.reducer,
  },
});
