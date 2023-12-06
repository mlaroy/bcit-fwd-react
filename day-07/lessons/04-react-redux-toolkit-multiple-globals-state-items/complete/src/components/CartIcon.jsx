import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CartIcon() {
    const cart = useSelector((state) => state.cart.items);
    return (
        <Link to="/cart">
            <span className="material-icons material-icons-outlined cart-icon">shopping_cart</span>
            {cart.length > 0 && <span className="cart-counter">{cart.length}</span>}
        </Link>
    );
}

export default CartIcon;
