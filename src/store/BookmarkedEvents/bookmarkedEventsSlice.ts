import { createSlice } from "@reduxjs/toolkit";

export interface BookmarkedEventsState {
  events: Record<string, boolean>; // eventId, T/F
}

export const bookedmarkedEventsSlice = createSlice({
  name: "bookmarkedEvents",
  initialState: {
    events: {} as Record<string, boolean>,
  },
  reducers: {
    toggleBookmark: (state, action) => {
      const eventId = action.payload;
      if (state.events[eventId] != null) {
        state.events[eventId] = !state.events[eventId];
      } else {
        state.events[eventId] = true;
      }
    },
  },
});

export const { toggleBookmark } = bookedmarkedEventsSlice.actions;

export default bookedmarkedEventsSlice.reducer;
