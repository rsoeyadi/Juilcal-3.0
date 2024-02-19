import { configureStore } from "@reduxjs/toolkit";
import { querySlice } from "./store/search/querySlice";

export default configureStore({
  reducer: {
    query: querySlice.reducer,
  },
});
