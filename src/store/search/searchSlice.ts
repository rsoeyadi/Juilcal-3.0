import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  searchQuery: string;
  filters: string[];
  searchResults: Event[];
}

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    filters: [],
    searchResults: [],
  } as SearchState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
