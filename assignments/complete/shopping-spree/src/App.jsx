import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  const products = [
    'Camera', 'Shoes', 'Handbag', 'Smartphone', 'Sweater', 'Headphones', 'Book', 'Ring'
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const item = event.target.products.value;

    setCart([...cart, item]);
  }

  return (
    <>
      <header>
        <h1>
          Shopping Spree
        </h1>
      </header>
      <div>
        <p>Add Some Items</p>

        {cart.length > 0 && (
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item}>{item}</li>
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
