import { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-4 h-[635px] overflow-y-auto hide-scrollbar hover:overflow-y-scroll">
      {products.map(product => (
        <div key={product.id} className="flex flex-col md:flex-row mb-4 p-4 border rounded shadow-lg">
          <div className="md:w-1/4 w-full">
            <img src={product.image} alt={product.title} className="w-full h-60" />
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Add to Cart
            </button>
          </div>
          <div className="md:w-3/4 w-full md:pl-4 mt-4 md:mt-0">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
