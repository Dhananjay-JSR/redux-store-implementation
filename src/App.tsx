import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Items_Store from './Components/Items_Store'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux'
import { MyStoreProps } from './data/data';
import CartSlice from './ReduxStore/CartSlice';



interface IRootState {
  Cart:Array<{
    ItemName:String,
    ItemPrice:number,
    ItemsImage:String,
    ProductID:number,
    Ordered:number
}>,
  Data:MyStoreProps
}

function App() {
  
  const MyStore = useSelector((state:IRootState) => state.Data)
  const Cart = useSelector((state:IRootState) => state.Cart)
  console.log(Cart)
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
            />{' '}
            Store App Front
          </Navbar.Brand>
        </Container>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Cart Items :- </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
    {

      MyStore.map(products=>{
        return <Items_Store key={products.ProductID.toString()} ItemName={products.ItemName} ItemPrice={products.ItemPrice} ItemsAuthor={products.ItemsAuthor} ItemsImage={products.ItemsImage} ProductID={products.ProductID} RemainingItems={products.RemainingItems} orderedAmt={Cart[products.ProductID-1].Ordered}/>
      })
    }
    </>
  )
}
export default App
