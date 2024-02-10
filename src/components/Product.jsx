import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { add } from '../store/cartSlice';


const Product = ({ product }) => {
    const dispatch = useDispatch()
    const addToCart = (product) => {
        dispatch(add({ ...product, barcode: uuidv4() }))
    }
    return (
        <div className="col-md-3 col-sm-12 g-2" >
            <Card style={{ width: '18rem' }} className='h-100 text-center mx-auto'>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{
                        width: '100px',
                        height: '130px'
                    }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{
                    background: 'none',
                    height: '50px'
                }}>
                    <Button variant="primary" onClick={() => addToCart(product)} >Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Product

