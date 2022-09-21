import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Items_Store from "./Components/Items_Store";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { MyStoreProps } from "./data/data";
import type { CartType } from "./utils/type";
import Cart_Items from "./Components/Cart_Items";
import { GetTotalCartItem, GetTotalCartPrice } from "./utils/helperFn";
interface IRootState {
  Cart: Array<CartType>;
  Data: MyStoreProps;
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
                  if (GetTotalCartItem(Cart) == 0) {
                    window.alert(
                      "Nothing to Show in Cart Please Add Some Productss"
                    );
                  } else {
                    setShowCart((prev) => !prev);
                  }
                }}
              >
                <div>Cart Items :- {GetTotalCartItem(Cart)}</div>
              </Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      {ShowCart ? (
        GetTotalCartItem(Cart) == 0 ? (
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
                  Total Price:- Rs {GetTotalCartPrice(Cart)}
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
