import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/countersSlice";
import { apiSlice } from "../features/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
// import postsSlice from '../features/posts/postsSlice'

//custom middleware
// const mylogger = (store) => (next) => (action) => {
//   console.log(`Action is ${JSON.stringify(action)}`);
//   console.log(`CurrentState is ${JSON.stringify(store.getState())}`);

//   return next(action);

// }

const store = configureStore({
  reducer: {
    counters: countersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   console.log(getDefaultMiddleware());
  //   return getDefaultMiddleware().concat(mylogger);
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
export default store;
