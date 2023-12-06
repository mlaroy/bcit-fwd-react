import { Link } from 'react-router-dom';

function CartIcon() {
    return (
        <Link to="/cart">
            <span class="material-icons material-icons-outlined cart-icon">shopping_cart</span>
            <span class="cart-counter">99</span>
        </Link>
    );
}

export default CartIcon;
