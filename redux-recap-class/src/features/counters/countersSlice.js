import { createSlice } from "@reduxjs/toolkit";
import initialCounters from "../../data/initialCounters";

const countersSlice = createSlice({
  name: "counters",
  initialState: initialCounters,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => (c.id === action.payload));
      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => (c.id === action.payload));
      state[counterIndex].value--;
    },
  },
});

export default countersSlice.reducer;

export const { increment, decrement } = countersSlice.actions;
