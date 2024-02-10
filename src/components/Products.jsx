
import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { collectProductsFromAPI } from '../store/productSlice';
import { statusCode } from '../utils/statusCode';
import Product from './Product';


const Products = () => {
    const { data: products, status } = useSelector(state => state.products)
    const dispatch = useDispatch()




    useEffect(() => {
        dispatch(collectProductsFromAPI())
    }, [])

    const cards = products.map(product => (
        <Product product={product} key={product.id} />
    ))
    return (
        <>
            <h2>Products</h2>
            {status === statusCode.LOADING ? (
                <p style={{ textAlign: 'center' }}>Loading...</p>
            ) : (
                status === statusCode.ERROR ? (
                    // <p style={{ marginInline: 'auto', textAlign: 'center' }}></p>
                    <Alert variant='danger' key={'danger'} className='alert'>Something went wrong, dude</Alert>
                ) : (
                    <div className="row" style={{ marginInline: 'auto', textAlign: 'center' }}>{cards}</div>
                )
            )}
        </>
    )
}

export default Products