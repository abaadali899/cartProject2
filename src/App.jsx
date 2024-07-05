import { useState } from 'react';
import Cart from './components/Cart';
import Remover from './components/Remover';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  // Calculate total number of items
  const totalItems = cart.length;

  // Calculate total cost
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="App grid grid-cols-12">
      <div className='col-span-6'>
        <h2 className="text-xl font-bold text-center my-4">
          Cart Items ({totalItems}) - Total Cost: ${totalCost.toFixed(2)}
        </h2>
        <Remover cart={cart} removeFromCart={removeFromCart} />
      </div>
      <div className='col-span-6'>
        <h1 className="text-2xl font-bold text-center my-4">Shopping Cart</h1>
        <Cart addToCart={addToCart} />
      </div>
    </div>
  );
};

export default App;
