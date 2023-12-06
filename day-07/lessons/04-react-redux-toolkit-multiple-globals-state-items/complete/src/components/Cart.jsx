import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../features/cart/cartSlice';

function Cart() {

    const cartItems = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();

    return (
        <>
            <ul className="cart-items">
                {cartItems.map((item) => {
                    return (
                        <li className="cart-item" key={item.id}>
                            <div className="cart-item-grid-container">
                                <span className="item-title">{item.title}</span>
                                <button onClick={() => dispatch(deleteItem(item))}>Remove from Cart</button>
                                <span>-</span>
                                <span className="item-price">${item.price}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="total">
                <p><b>Total: </b>${total.toFixed(2)}</p>
            </div>
        </>
    );
}

export default Cart
