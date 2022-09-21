import React from "react";
import { Button } from "react-bootstrap";
import { AddMore, RemoveItem } from "../ReduxStore/DataSlice";
import { useDispatch } from "react-redux";
import {
  AddMore as AddItemToCart,
  RemoveItem as RemoveItemToCart,
} from "../ReduxStore/CartSlice";
interface PropType {
  ItemName: String;
  ItemPrice: number;
  ItemsImage: String;
  ProductID: number;
  Ordered: number;
}
function Cart_Items(props: PropType) {
  const dispatch = useDispatch();
  return (
    <div className="d-flex m-5">
      <img
      alt="Image"
        src={props.ItemsImage as string}
        height={200}
        width={150}
        className="rounded float-left"
      />
      <div className="m-3">
        <p className="text-danger">Item Name :- {props.ItemName}</p>
        <p className="text-danger">Item Price :- {props.ItemPrice}</p>
        <p className="text-danger">Ordered Amount</p>
        <div className="d-flex">
          <Button
            onClick={() => {
              dispatch(
                RemoveItem({
                  productID: props.ProductID,
                })
              );
              dispatch(
                RemoveItemToCart({
                  productID: props.ProductID,
                })
              );
            }}
          >
            -
          </Button>
          <div
            style={{
              minWidth: "100px",
              textAlign: "center",
            }}
          >
            {props.Ordered}
          </div>
          <Button
            onClick={() => {
              dispatch(
                AddMore({
                  productID: props.ProductID,
                })
              );
              dispatch(
                AddItemToCart({
                  productID: props.ProductID,
                })
              );
            }}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Cart_Items;
