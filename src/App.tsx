import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Items_Store from "./Components/Items_Store";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { MyStoreProps } from "./data/data";
import Cart_Items from "./Components/Cart_Items";
import CartSlice from "./ReduxStore/CartSlice";
interface IRootState {
  Cart: Array<{
    ItemName: String;
    ItemPrice: number;
    ItemsImage: String;
    ProductID: number;
    Ordered: number;
  }>;
  Data: MyStoreProps;
}
function getTotalCartItem(
  Cart: Array<{
    ItemName: String;
    ItemPrice: number;
    ItemsImage: String;
    ProductID: number;
    Ordered: number;
  }>
) {
  let num = 0;
  Cart.map((e) => {
    num = num + e.Ordered;
  });
  return num;
}
function GetTOtalCartPrice(
  Cart: Array<{
    ItemName: String;
    ItemPrice: number;
    ItemsImage: String;
    ProductID: number;
    Ordered: number;
  }>
) {
  let num = 0;
  Cart.map((items) => {
    if (items.Ordered != 0) {
      num = num + items.ItemPrice * items.Ordered;
    }
  });
  return num;
}
function App() {
  const [ShowCart, setShowCart] = useState(false);

  const MyStore = useSelector((state: IRootState) => state.Data);
  const Cart = useSelector((state: IRootState) => state.Cart);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={reactLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Store App Front
          </Navbar.Brand>
        </Container>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                  if (getTotalCartItem(Cart) == 0) {
                    window.alert(
                      "Nothing to Show in Cart Please Add Some Productss"
                    );
                  } else {
                    setShowCart((prev) => !prev);
                  }
                }}
              >
                {" "}
                <div>Cart Items :- {getTotalCartItem(Cart)}</div>
              </Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      {ShowCart ? (
        getTotalCartItem(Cart) == 0 ? (
          setShowCart((pev) => !pev)
        ) : (
          <div className=" d-flex align-items-center justify-content-center ">
            <div>
              <>
                <h1>Your Cart Scroll Down to Check Bill</h1>
                {Cart.map((items) => {
                  if (items.Ordered != 0) {
                    return (
                      <Cart_Items
                        key={items.ProductID.toString()}
                        ItemName={items.ItemName}
                        ItemPrice={items.ItemPrice}
                        ItemsImage={items.ItemsImage}
                        Ordered={items.Ordered}
                        ProductID={items.ProductID}
                      />
                    );
                  }
                })}
                <h1
                  style={{
                    textAlign: "center",
                  }}
                  className="text-danger"
                >
                  Total Price:- Rs {GetTOtalCartPrice(Cart)}
                </h1>
              </>
            </div>
          </div>
        )
      ) : (
        MyStore.map((products) => {
          return (
            <Items_Store
              key={products.ProductID.toString()}
              ItemName={products.ItemName}
              ItemPrice={products.ItemPrice}
              ItemsAuthor={products.ItemsAuthor}
              ItemsImage={products.ItemsImage}
              ProductID={products.ProductID}
              RemainingItems={products.RemainingItems}
              orderedAmt={Cart[products.ProductID - 1].Ordered}
            />
          );
        })
      )}
    </>
  );
}
export default App;
