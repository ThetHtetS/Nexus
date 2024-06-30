import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
//import { fetchCount } from "./counterAPI";
export interface rateData {
    exchangeRate: number;
    currency: String,
    date: Date
}

export interface rateSliceState {
  data: rateData[]
}
let date = new Date();
const initialState: rateSliceState = {
 data: [
  {
  currency: "USD",
  exchangeRate: 4402.05,
   date
 },
 {
  currency: "THB",
  exchangeRate: 109.05,
  date
 },
 {
  currency: "SGD",
  exchangeRate: 3200,
  date
 },
 {
  currency: "MMK",
  exchangeRate: 1,
  date
 },

]
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const rateSlice = createAppSlice({
  name: "rate",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    addData: create.reducer((state, action: PayloadAction<object>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   console.log(action.payload, "payload")
      console.log(state.data, "state.data");
      state.data = state.data.map((item) =>
      item.currency == action.payload.currency ? action.payload : item)
     // state.data.push(action.payload);
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectRate: (data) => data.data
  },
});

//Action creators are generated for each case reducer function.
export const { addData } = rateSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectRate } = rateSlice.selectors;

