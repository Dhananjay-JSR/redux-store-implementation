import type { CartType } from "./type";
import type { MyStoreProps } from "../data/data";

export function GetTotalCartItem(
    Cart: Array<CartType>
  ) {
    let num = 0;
    Cart.map((e) => {
      num = num + e.Ordered;
    });
    return num;
  }


  
export function GetTotalCartPrice(
    Cart: Array<CartType>
  ) {
    let num = 0;
    Cart.map((items) => {
      if (items.Ordered != 0) {
        num = num + items.ItemPrice * items.Ordered;
      }
    });
    return num;
  }


  export function CreateCartInitialState(MyStore:MyStoreProps) {
    let Cart: Array<CartType> = [];
    MyStore.map((e) => {
      Cart.push({
        ItemName: e.ItemName,
        ItemPrice: e.ItemPrice,
        ItemsImage: e.ItemsImage,
        ProductID: e.ProductID,
        Ordered: 0,
      });
    });
    return Cart;
  }