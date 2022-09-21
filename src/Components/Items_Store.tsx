import React,{useState } from 'react'
import {MyStore} from '../data/data'
import { Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import type {ItemStructure} from '../data/data'


function Items_Store(props:ItemStructure) {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
    <div className='m-3 h-100 d-flex align-items-center justify-content-center'>
    <img src={props.ItemsImage as string} height={400} width={300} className="rounded float-left" alt="..."/>
    <div className='m-3'>
    <p className='text-success'>Item Name :- {props.ItemName}</p>
    <div>Author Name :- Kleppmann Martin {props.ItemsAuthor}</div>
    <div className='text-white bg-dark'>Pricing :- Rs {props.ItemPrice.toString()}</div>
    <div className='text-white bg-dark'>Remaining Set:- {props.RemainingItems.toString()}</div>
    <br/>
    <div className='text-danger'>Add to Cart</div>
    <br/>
    <Button className='m-3'>Remove Item -</Button>
    <Button className='m-3' onClick={handleShow}>Insert Custom Amount </Button>
    <Button className='m-3'>Add Item + </Button>
    </div>
    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.ItemName} </Modal.Title>
        </Modal.Header>
        <Modal.Body> <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Amount"
          aria-label="Enter Amount"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleClose}>
          Add Amount
        </Button>
      </InputGroup></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Items_Store