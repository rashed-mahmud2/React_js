import { createSlice } from "@reduxjs/toolkit";
import initialcounts from "../../data/initialCounts";

const counterSlice = createSlice({
  name: "counters",
  initialState: initialcounts,
  reducers: {
    increment: (state, action) => {
      // we will get counterId form action.payload
      const counterIndex = state.findIndex((c) => (c.id === action.payload));
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      // we will get counterId form action.payload
      const counterIndex = state.findIndex((c) => (c.id === action.payload));
      state[counterIndex].value--;
    },
  },
});

export default counterSlice.reducer;

export const {increment, decrement} = counterSlice.actions