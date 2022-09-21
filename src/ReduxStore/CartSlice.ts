import { createSlice } from '@reduxjs/toolkit'
import { MyStore } from '../data/data'
import type {ItemStructure} from '../data/data'

function CreateCartInitialState(){
    let Cart:Array<{
        ItemName:String,
        ItemPrice:number,
        ItemsImage:String,
        ProductID:number,
        Ordered:number
    }> = []
   MyStore.map(e=>{
        Cart.push({
            ItemName:e.ItemName,
            ItemPrice:e.ItemPrice,
            ItemsImage:e.ItemsImage,
            ProductID:e.ProductID,
            Ordered: 0
        })
    })
    return Cart;
}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: CreateCartInitialState(),
  reducers: {
    AddMore: (state,action) => {
        let payload = {
          amount:1,
          productID:0,
          ...action.payload
        }
        state.map(e=>{
          if (e.ProductID==payload.productID){
            state[(e.ProductID)-1].Ordered = state[(e.ProductID)-1].Ordered + payload.amount
          }
        })
      },
      RemoveItem: (state,action) => {
  
        let payload = {
          amount:1,
          productID:0,
          ...action.payload
        }
  
        state.map(e=>{
          if (e.ProductID==payload.productID){
            state[(e.ProductID)-1].Ordered = state[(e.ProductID)-1].Ordered - payload.amount
          }
        })
      
      },
  },
})
export const { AddMore, RemoveItem } = CartSlice.actions

export default CartSlice.reducer