import { createSlice } from "@reduxjs/toolkit";
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
      state.allEvents = action.payload; // this should be ok because it only runs once (or is supposed to only run once)
    },
    toggleBookmark: (state, action) => {
      const eventId = action.payload;
      if (state.bookmarkedEvents[eventId] != null) {
        console.log("first");
        state.bookmarkedEvents[eventId] = !state.bookmarkedEvents[eventId];
      } else {
        console.log("second");
        state.bookmarkedEvents[eventId] = true;
      }
    },
  },
});

export const { addEvents, toggleBookmark } = bookmarkedEventsSlice.actions;

export default bookmarkedEventsSlice.reducer;
