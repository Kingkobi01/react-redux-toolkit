import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const Cart = () => {

    const cartProducts = useSelector(state => state.cart)
    const cards = cartProducts.map(product => <CartProduct key={product.barcode} product={product} />)
    return (
        <>
            <h2>Cart</h2>
            <div className="row" style={{ marginInline: 'auto' }}>
                {cards.length > 0 ? cards : <h3 className='bought-nothing'>You have no products here...</h3>}
            </div>
            {cards.length > 0 &&
                <Button
                    variant='success'
                    style={{
                        margin: '4rem auto', textAlign: 'center', display: 'block'
                    }}
                >Proceed to checkout
                </Button>}
        </>
    )
}

export default Cart