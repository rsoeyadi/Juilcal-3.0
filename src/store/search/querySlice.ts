import { createSlice } from "@reduxjs/toolkit";
export interface RootState {
  query: {
    searchbarValue: string;
  };
}

export const querySlice = createSlice({
  name: "query",
  initialState: {
    searchbarValue: "",
    filters: [],
    events: [],
  },
  reducers: {
    updateSearch: (state, action) => {
      state.searchbarValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSearch } = querySlice.actions;

export default querySlice.reducer;
