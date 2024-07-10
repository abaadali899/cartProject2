import { useState } from 'react';
import Cart from './components/Cart';
import Remover from './components/Remover';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

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
    <div className="App grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className='col-span-1 md:col-span-1'>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-center my-4">
            Cart Items ({totalItems}) - Total Cost: ${totalCost.toFixed(2)}
          </h2>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded md:hidden" 
            onClick={() => setShowProducts(!showProducts)}>
            {showProducts ? "Hide Products" : "Go to Products"}
          </button>
        </div>
        <div className={`mt-4 ${showProducts ? "" : "hidden"} md:block`}>
          <Remover cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
      <div className='col-span-1 md:col-span-1'>
        <h1 className="text-2xl font-bold text-center my-4">Shopping Cart</h1>
        <Cart addToCart={addToCart} />
      </div>
    </div>
  );
};

export default App;
