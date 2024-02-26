import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./store/search/searchSlice";

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});
