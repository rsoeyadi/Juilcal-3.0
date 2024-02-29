import { createSlice } from "@reduxjs/toolkit";

export interface BookmarkedEventsState {
  bookmarkedEvents: Record<string, boolean>; // eventId, T/F
}

export const bookmarkedEventsSlice = createSlice({
  name: "bookmarkedEvents",
  initialState: {
    bookmarkedEvents: {} as Record<string, boolean>,
  },
  reducers: {
    toggleBookmark: (state, action) => {
      const eventId = action.payload;
      if (state.bookmarkedEvents[eventId] != null) {
        state.bookmarkedEvents[eventId] = !state.bookmarkedEvents[eventId];
      } else {
        state.bookmarkedEvents[eventId] = true;
      }
    },
  },
});

export const { toggleBookmark } = bookmarkedEventsSlice.actions;

export default bookmarkedEventsSlice.reducer;
