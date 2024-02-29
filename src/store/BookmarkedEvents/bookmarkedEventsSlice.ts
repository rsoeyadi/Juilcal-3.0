import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Event as MyEvent } from "../../common/types";

export interface BookmarkedEventsState {
  bookmarkedEvents: Record<string, boolean>; // eventId, T/F
  allEvents: MyEvent[];
}

export const bookmarkedEventsSlice = createSlice({
  name: "bookmarkedEvents",
  initialState: {
    bookmarkedEvents: {} as Record<string, boolean>,
    allEvents: [] as MyEvent[],
  },
  reducers: {
    addEvents: (state, action) => {
      console.log(action.payload);
    },
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

export const { addEvents, toggleBookmark } = bookmarkedEventsSlice.actions;

export default bookmarkedEventsSlice.reducer;
