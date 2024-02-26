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
      state.events[eventId] = !state.events[eventId];
    },
  },
});

export const { toggleBookmark } = bookedmarkedEventsSlice.actions;

export default bookedmarkedEventsSlice.reducer;
