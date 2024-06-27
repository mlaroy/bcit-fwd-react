import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // just an array...
    // const [cart, setCart] = useState([])

    // as an array of objects
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)



  const products = [
    'Camera', 'Shoes', 'Handbag', 'Smartphone', 'Sweater', 'Headphones', 'Book', 'Ring'
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log({ event })
    // get the value of the selected product
    const item = event.target.elements.products.value;

    // just an array, go right ahead and update
    // setCart([...cart, item]);

    // and that would be it

    // otherwise, let find out if the item is already in the cart
    const index = cart.findIndex((cartItem) => cartItem.name === item);
    // console.log({index})

    if(index === -1) {
        const newCartObj = {
            name: item,
            quantity: 1
        }
        setCart([...cart, newCartObj ]);
        setQuantity(quantity + 1);
    } else {
        const newCart = [...cart];
        newCart[index].quantity++;
        setCart(newCart);

        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
  }

  const cartText = () => {
    if (quantity === 0) {
      return 'Your cart is empty';
    }
    return `You have ${quantity > 1 ?  quantity + ' items' : ' 1 item'} in your cart`;
  }

  return (
    <>
      <header>
        <h1>
          Shopping Spree
        </h1>
      </header>
      <div>
        <p>{cartText()}</p>

        {cart.length > 0 && (
          <ul className="cart-items">
            {cart.map((item, index) => (
                <li key={index}>
                    {item.name}
                    {item.quantity > 1 && <span> x {item.quantity}</span>}
                </li>
            ))}
          </ul>
        )}

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="products">Products</label>
          <select name="products" id="products">
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  )
}

export default App
