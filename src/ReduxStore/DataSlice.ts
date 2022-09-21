import { createSlice,current  } from '@reduxjs/toolkit'
import { MyStore } from '../data/data'

export const DataSlice = createSlice({
  name: 'Data',
  initialState: MyStore,
  reducers: {
    AddMore: (state,action) => {
      let payload = {
        amount:1,
        productID:0,
        ...action.payload
      }
      state.map(e=>{
        if (e.ProductID==payload.productID){
          state[(e.ProductID)-1].RemainingItems = state[(e.ProductID)-1].RemainingItems - payload.amount
     
        }
      })
    },
    RemoveItem: (state,action) => {

      let payload = {
        amount:1,
        productID:0,
        ...action.payload
      }

      //The State Mutation works in a way that it first locatates the prodoct from it's ID
      // after it found that it , it uses index to navigate to array and perforce the required updated needed

      state.map(e=>{
        if (e.ProductID==payload.productID){
          state[(e.ProductID)-1].RemainingItems = state[(e.ProductID)-1].RemainingItems + payload.amount
     
        }
      })
    
    },
  },
})
export const { AddMore, RemoveItem } = DataSlice.actions

export default DataSlice.reducer