import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';

function PageCart() {

    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
		document.title = `${appTitle} - Cart`;
	}, []);

    return (
        <main>
            <section className="cart-section">
                <h2>Cart</h2>
            {cartItems.length === 0 ? <p>No items in your cart.</p> : <Cart />}
            </section>
        </main>
    );
}

export default PageCart
