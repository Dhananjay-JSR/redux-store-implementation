import { createSlice } from "@reduxjs/toolkit";
import { MyStore } from "../data/data";
import {CreateCartInitialState} from '../utils/helperFn'

export const CartSlice = createSlice({
  name: "Cart",
  initialState: CreateCartInitialState(MyStore),
  reducers: {
    AddMore: (state, action) => {
      let payload = {
        amount: 1,
        productID: 0,
        ...action.payload,
      };
      state.map((e) => {
        if (e.ProductID == payload.productID) {
          state[e.ProductID - 1].Ordered =
            state[e.ProductID - 1].Ordered + payload.amount;
        }
      });
    },
    RemoveItem: (state, action) => {
      let payload = {
        amount: 1,
        productID: 0,
        ...action.payload,
      };

      state.map((e) => {
        if (e.ProductID == payload.productID) {
          state[e.ProductID - 1].Ordered =
            state[e.ProductID - 1].Ordered - payload.amount;
        }
      });
    },
  },
});
export const { AddMore, RemoveItem } = CartSlice.actions;

export default CartSlice.reducer;
